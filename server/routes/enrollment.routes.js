import express from 'express'
import authCtrl from '../controllers/auth.controller'
import courseCtrl from '../controllers/course.controller'
import enrollmentCtrl from '../controllers/enrollment.controller'

const router = express.Router()

router.route('/api/enrollment/enrolled')
    .get(authCtrl.requireSignin, enrollmentCtrl.listEnrolled)

router.route('/api/enrollment/new/:courseId')
    .post(authCtrl.requireSignin, enrollmentCtrl.findEnrollment, enrollmentCtrl.create)

router.route('/api/enrollment/stats/:courseId')
    .get(enrollmentCtrl.enrollmentStats)

router.route('/api/enrollment/complete/:enrollmentId')
    .put(authCtrl.requireSignin, enrollmentCtrl.isStudent, enrollmentCtrl.complete)

router.route('/api/enrollment/:enrollmentId')
    .get(authCtrl.requireSignin, enrollmentCtrl.isStudent, enrollmentCtrl.read)
    .delete(authCtrl.requireSignin, enrollmentCtrl.isStudent, enrollmentCtrl.remove)

router.param('courseId', courseCtrl.courseById)
router.param('enrollmentId', enrollmentCtrl.enrollmentById)

export default router