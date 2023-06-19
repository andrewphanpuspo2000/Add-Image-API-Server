import itemSchema from "./taskSchema.js";

export const addItem = (obj) => {
  return itemSchema(obj).save();
};

export const getAllItem = () => {
  return itemSchema.find();
};
export const addComment = async ({ _id, comment }) => {
  const tempItem = await itemSchema.findById(_id);

  tempItem?._id ? tempItem.comment.push(comment) : console.log("not found");

  return itemSchema.findByIdAndUpdate(_id, { comment: tempItem.comment });
};

export const deleteItem = () => {
  return itemSchema.find();
};
