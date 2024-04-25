const express = require('express')
const router = express.Router() // figures out what code to run in response to a request
// typically based on the URL, and the method, GET, POST ...

// responds to get request to home page
router.get('/', function(req, res, next) { // request, response, next
    //name of handlebars file - name of a template, optional object with data for the template
    res.render('index', {
        title: 'Feedback Application',
        author: 'Maximus',
        timePageLoadedAt: new Date(),
    })
}) // get request to the home page

router.get('/feedback-form', function(req, res, next) {
    res.render('student_feedback_form') // this is a route handler
})

router.get('/submit-feedback', function (req, res, next) {
    // access form data
    const formData = req.query
    console.log(formData)

    res.render('thank_you', {
        name: formData.name,
        email: formData.email,
        comments: formData.comments,
        currentStudent: formData['current-student']
    })
})

module.exports = router // needs to stay last line in file because anything after will be ignored