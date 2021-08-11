import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { todoActions } from "../../../store/slices/todo-slice";
import { useDrop, useDrag } from "react-dnd";
import { ItemTypes } from "./ItemTypes";
import { Edit, Clear } from "@material-ui/icons";

const Todo = (props) => {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const styles = [];
  const ref = useRef(null); // DnD

  const [{ handlerId }, drop] = useDrop({
    accept: ItemTypes.CARD,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = props.index;
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }
      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      // Determine mouse position
      const clientOffset = monitor.getClientOffset();
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      // Time to actually perform the action
      props.moveTodo(dragIndex, hoverIndex);
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
    },
  }); // DnD

  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.CARD,
    item: () => {
      if (props.completed) {
        return;
      }
      return { id: props.id, index: props.index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }); // DnD

  const opacity = isDragging ? 0 : 1; // DnD
  // drag(drop(ref)); // DnD

  const { todos } = props;
  useEffect(() => {
    drag(drop(ref)); // DnD
  }, [todos, drag, drop]);

  if (props.completed) {
    styles.push("completed");
  }

  const handleStatusChange = (event) => {
    dispatch(todoActions.toggleTodoStatus(props.id));
  };

  const handleTaskDelete = (event) => {
    dispatch(todoActions.removeTodo(props.id));
  };

  const handleTaskEdit = (event) => {
    setIsEdit(true);
  };

  const handleTaskSave = (event) => {
    event.preventDefault();

    setIsEdit(false);
  };

  const handleTaskTextChange = (event) => {
    dispatch(
      todoActions.changeTodoText({ id: props.id, text: event.target.value })
    );
  };

  return (
    <div>
      {!isEdit ? (
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          ref={ref}
          style={{ opacity }}
          data-handler-id={handlerId}
        >
          <FormControlLabel
            className={styles.join(" ")}
            control={
              <Checkbox
                checked={props.completed}
                onChange={handleStatusChange}
                name="checkedB"
                color="primary"
              />
            }
            label={props.text}
          />
          <div>
            <Button onClick={handleTaskEdit} color="primary">
              <Edit />
            </Button>
            <Button onClick={handleTaskDelete}>
              <Clear color="error" />
            </Button>
          </div>
        </Box>
      ) : (
        // <form onSubmit={handleTaskSave}>
        <>
          <TextField
            value={props.text}
            onChange={handleTaskTextChange}
          ></TextField>
          <Button onClick={handleTaskSave} type="submit" color="primary">
            Save
          </Button>
        </>
        // </form>
      )}
    </div>
  );
};

export default Todo;
