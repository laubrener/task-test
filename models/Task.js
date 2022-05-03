import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title.'],
  },
  complete: {
    type: Boolean,
    required: true,
  },
  color: {
    type: String,
  }
})

export default mongoose.models.Task || mongoose.model('Task', TaskSchema);
