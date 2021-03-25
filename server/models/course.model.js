import mongoose from 'mongoose'

const LessonSchema = new mongoose.Schema({
    title: String,
    content: String,
    resource_url: String
})

const Lesson = mongoose.model('Lesson', LessonSchema)

const CourseSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: 'Name is required'
    },
    descroption: {
        type: String,
        trim: true
    },
    image: {
        type: Buffer,
        contentType: String
    },
    category: {
        type: String,
        require: 'Category is required'
    },
    published: {
        type: Boolean,
        default: falsee
    },
    instructor: {
        type: mongoose.Schema.ObjectId, ref: 'User'},
    updated: Date,
    created: {
        type: Date,
        default: Date.now
    },
    lessons: [LessonSchema]
})

export default mongoose.model('Course', CourseSchema)