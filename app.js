
function showSignupPage() {
    document.getElementById('signUpPage').classList.remove('hidden');
    document.getElementById('overlay').classList.remove('hidden');
}
function showLoginPage() {
    document.getElementById('loginPage').classList.remove('hidden');
    document.getElementById('overlay').classList.remove('hidden');
}
var userName = '';
var email = '';
var password = '';
var loginEmail = '';
var loginPassword = '';
function signupDetails() {
    userName = document.getElementById('username').value.toLowerCase();
    if (userName.trim() !== '') {
        email = document.getElementById('email').value.toLowerCase();
        if (email.trim() !== '') {
            password = document.getElementById('password').value;
            if (password.trim() !== '') {
                document.getElementById('signUpPage').classList.add('hidden');
                document.getElementById('overlay').classList.add('hidden');
                document.getElementById('username').value = '';
                document.getElementById('email').value = '';
                document.getElementById('password').value = '';
            }
            else {
                swal.fire({
                    title: 'Password?',
                    text: 'Please Enter Password',
                    icon: 'error'
                })
                document.getElementById('signUpPage').classList.remove('hidden');
                document.getElementById('overlay').classList.remove('hidden');
                document.getElementById('password').focus();
            }
        }
        else {
            swal.fire({
                title: 'Email?',
                text: 'Please Enter Address',
                icon: 'error'
            })
            document.getElementById('signUpPage').classList.remove('hidden');
            document.getElementById('overlay').classList.remove('hidden');
            document.getElementById('email').focus();
        }
    }
    else {
        swal.fire({
            title: 'UserName',
            text: 'Please Enter Username',
            icon: 'error'
        })
        document.getElementById('signUpPage').classList.remove('hidden');
        document.getElementById('overlay').classList.remove('hidden');
        document.getElementById('username').focus();
    }

}

function loginDetails() {
    loginEmail = document.getElementById('loginEmail').value.toLowerCase();
    if (loginEmail.trim() !== '') {
        loginPassword = document.getElementById('loginPassword').value.toLowerCase();
        if(loginPassword.trim() !== ''){
            if(loginEmail === email){
                if(loginPassword === password){
                    document.getElementById('dashboard').classList.remove('hidden');
                    document.getElementById('loginPage').classList.add('hidden');
                    document.getElementById('overlay').classList.add('hidden');
                    document.getElementById('main').classList.add('hidden')
                    document.getElementById('userName').innerHTML = userName;
                    document.getElementById('emailFirstPart').innerHTML = (email.split('@')[0].split(/[0-9]/)[0].split('_')[0].split('.').join(' '));

                }
                else{
                    swal.fire({
                        title : 'Invalid Password',
                        text : 'Enter Correct Password',
                        icon : 'error'
                    });
                    document.getElementById('loginPage').classList.remove('hidden');
                    document.getElementById('overlay').classList.remove('hidden');
                    document.getElementById('loginPassword').value = '';
                    document.getElementById('loginPassword').focus();

                }
            }
            else{
                swal.fire({
                    title : 'Invalid Email',
                    text : 'Enter Valid Email',
                    icon : 'error'
                });
                document.getElementById('loginPage').classList.remove('hidden');
                document.getElementById('overlay').classList.remove('hidden');
                document.getElementById('loginEmail').value = '';
                document.getElementById('loginPassword').value = '';
                document.getElementById('loginEmail').focus();
            }
        }
        else{
            swal.fire({
                title: 'Password?',
                text: 'Please Enter Password',
                icon: 'error'
            });
            document.getElementById('loginPage').classList.remove('hidden');
            document.getElementById('overlay').classList.remove('hidden');
            document.getElementById('loginPassword').focus();
        }
    }
    else {
        swal.fire({
            title: 'Email?',
            text: 'Please Enter Address',
            icon: 'error'
        });
        document.getElementById('loginPage').classList.remove('hidden');
        document.getElementById('overlay').classList.remove('hidden');
        document.getElementById('loginEmail').focus();
    }
}


var questions = [
    {
        question: "HTML Stands for ?",
        option1: "Hypertext",
        option2: "Markup",
        option3: "HyperSuperText",
        option4: "HyperText Markup Language",
        answer: "HyperText Markup Language",
    },
    {
        question: "Which Element used to bold text in HTML?",
        option1: "img",
        option2: "h1",
        option3: "strong",
        option4: "p",
        answer: "strong",
    },
    {
        question: "Which Element used for Image in HTML?",
        option1: "span",
        option2: "div",
        option3: "image",
        option4: "img",
        answer: "img",
    },
    {
        question: "Which tag is used to create a hyperlink in HTML?",
        option1: "link",
        option2: "a",
        option3: "hyperlink",
        option4: "url",
        answer: "a",
    },
    {
        question:
            "Which attribute is used to define the background color of a webpage in HTML?",
        option1: "bgcolor",
        option2: "color",
        option3: "background",
        option4: "style",
        answer: "bgcolor",
    },
    {
        question: "What is the correct HTML element for inserting a line break?",
        option1: "break",
        option2: "br",
        option3: "hr",
        option4: "line",
        answer: "br",
    },
    {
        question: "Which tag is used for creating an ordered list in HTML?",
        option1: "ul",
        option2: "li",
        option3: "ol",
        option4: "dl",
        answer: "ol",
    },
    {
        question: "Which tag is used to define a table in HTML?",
        option1: "table",
        option2: "tr",
        option3: "td",
        option4: "thead",
        answer: "table",
    },
    {
        question: "Which HTML tag is used to display a form in a webpage?",
        option1: "input",
        option2: "form",
        option3: "button",
        option4: "textarea",
        answer: "form",
    },
    {
        question:
            "What is the default value of the type attribute for an <input> tag in HTML?",
        option1: "text",
        option2: "password",
        option3: "checkbox",
        option4: "radio",
        answer: "text",
    },
];
var question = document.getElementById('question');
var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');
var option4 = document.getElementById('option4');
var label1 = document.getElementById('label1');
var label2 = document.getElementById('label2');
var label3 = document.getElementById('label3');
var label4 = document.getElementById('label4');
var quizOption = document.getElementsByName('quizOption');
var questionCount = 0;
var score = 0;


function renderQuestion() {
    question.innerHTML = questions[questionCount].question;
    label1.innerHTML = questions[questionCount].option1;
    label2.innerHTML = questions[questionCount].option2;
    label3.innerHTML = questions[questionCount].option3;
    label4.innerHTML = questions[questionCount].option4;
    option1.value = questions[questionCount].option1;
    option2.value = questions[questionCount].option2;
    option3.value = questions[questionCount].option3;
    option4.value = questions[questionCount].option4;

}

function deSelect() {
    for (var i = 0; i < quizOption.length; i++) {
        quizOption[i].checked = false;
    }
}

function next() {
    var radioCheck = false;
    for (var i = 0; i < quizOption.length; i++) {
        // console.log(quizOption[i])
        if (quizOption[i].checked) {
            radioCheck = true;
            // console.log('next')
            if (quizOption[i].value === questions[questionCount].answer) {
                score++;
                console.log(score)
            }
        }
    }
    if (!radioCheck) {
        swal.fire({
            title: 'No Option Selected',
            text: 'Please Select An Option',
            icon: 'error'
        })
    }
    else {

        if (questionCount < questions.length - 1) {
            questionCount++;
            renderQuestion();
            deSelect();
            if (questionCount == questions.length - 1) {
                document.getElementById('submit-btn').innerText = 'Finished '
            }
        }
        else {
            showResult();
        }
    }
}

function showResult(){
    var totalQuestion = questions.length;
    var correctQuestion = score;
    var percentage = (correctQuestion / totalQuestion) * 100;
    document.getElementById('quizPage').classList.add('hidden');
    document.getElementById('resultPage').classList.remove('hidden');
    if(percentage > 33){
        document.getElementById('resultCourseHeading').innerText = test_subject;
        document.getElementById('greeting').classList.remove('hidden');
        document.getElementById('totalQuestion').innerText = totalQuestion;
        document.getElementById('correctQuestion').innerText = score;
        document.getElementById('percentage').innerHTML = `${percentage}%`;
    }
    else{
        document.getElementById('resultCourseHeading').innerText = test_subject;
        document.getElementById('greeting').classList.add('hidden');
        document.getElementById('greetingFail').classList.remove('hidden');
        document.getElementById('totalQuestion').innerText = totalQuestion;
        document.getElementById('correctQuestion').innerText = score;
        document.getElementById('percentage').innerHTML = `${percentage}%`;
        document.getElementById('resultUserName').innerText = userName;
    }

}

function homePage(){
    document.getElementById('main').classList.remove('hidden');
    document.getElementById('signUpPage').classList.add('hidden');
    document.getElementById('loginPage').classList.add('hidden');
    document.getElementById('dashboard').classList.add('hidden');
    document.getElementById('quizDashboard').classList.add('hidden');
    document.getElementById('quizPage').classList.add('hidden');
    document.getElementById('resultPage').classList.add('hidden');
}

function close_btn() {
    document.getElementById('signUpPage').classList.add('hidden');
    document.getElementById('overlay').classList.add('hidden');
    document.getElementById('loginPage').classList.add('hidden');
}


function quizDashboard(){
    var quizCourseSubjject = document.getElementById('webDevelopmentSubject').innerText;
    document.getElementById('dashboard').classList.add('hidden');
    document.getElementById('quizDashboard').classList.remove('hidden');
    document.getElementById('quizCourse').innerHTML = document.getElementById('webDevelopment').innerText;
    document.getElementById('quizCourseSubject').innerHTML = `(${quizCourseSubjject})`;
    document.getElementById('quizDashboardUserName').innerText = userName;
    // console.log(userName);
}
var test_subject = '';
function startQuiz(test){
    document.getElementById('quizDashboard').classList.add('hidden');
    document.getElementById('quizPage').classList.remove('hidden');
    document.getElementById('quizPageUserName').innerHTML = userName;
    test_subject = document.getElementById(test).innerText;
    // console.log(test_subject);
}
window.onload = renderQuestion();


// email = 'engr.shahrukh786@gmail.com'
// console.log(email.split('@')[0].split(/[0-9]/)[0].split('_')[0].split('.').join(' '))
