var body = document.getElementById('body');

function modeChange() {
    var state = localStorage.getItem('mode');
    if (state === 'true') {
        localStorage.setItem('mode', 'false');
        body.classList.toggle('dark_mode')
        document.getElementById('lightMode').classList.add('hidden');
        document.getElementById('darkMode').classList.remove('hidden');

    }
    else {
        localStorage.setItem('mode', 'true');
        // body.classList.toggle('dark_mode', 'true')
        body.className = ''
        document.getElementById('lightMode').classList.remove('hidden');
        document.getElementById('darkMode').classList.add('hidden');
    }
    // localStorage.setItem('mode', !state);
    // body.classList.toggle('Dark_mode', !state)
}
function setDefault() {
    var checkMode = localStorage.getItem('mode');
    if (checkMode === null) {
        localStorage.setItem('mode', 'true');
        // body.classList.toggle('dark_mode')
        document.getElementById('lightMode').classList.remove('hidden');
        document.getElementById('darkMode').classList.add('hidden');
        // modeChange();
    }
    else if (checkMode === 'false') {
        body.classList.toggle('dark_mode')
        document.getElementById('lightMode').classList.add('hidden');
        document.getElementById('darkMode').classList.remove('hidden');
    }
    else {
        body.className = ''
        document.getElementById('lightMode').classList.remove('hidden');
        document.getElementById('darkMode').classList.add('hidden');
    }
}


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
var loginUserName = '';
var loginPassword = '';
var userinfo = {};
// console.log(JSON.parse(localStorage.getItem('userName')).username)
function signupDetails() {
    userName = document.getElementById('username').value.toLowerCase();
    // console.log(JSON.parse(localStorage.getItem(userName)))
    // console.log(JSON.parse(localStorage.getItem(userName)))
    if (!Boolean(JSON.parse(localStorage.getItem(userName)))) {
        if (userName.trim() !== '') {
            email = document.getElementById('email').value.toLowerCase();
            if (email.trim() !== '') {
                password = document.getElementById('password').value;
                if (password.trim() !== '') {
                    userinfo.username = userName;
                    userinfo.emailAddress = email;
                    userinfo.userPassword = password;
                    localStorage.setItem(userName, JSON.stringify(userinfo));
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
    } else {
        swal.fire({
            title: 'UserName',
            text: 'User Name is Already registered try other username',
            icon: 'error'
        })
        document.getElementById('signUpPage').classList.remove('hidden');
        document.getElementById('overlay').classList.remove('hidden');
        document.getElementById('username').focus();
        document.getElementById('username').value = '';
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
    }

}
var localStorageObject = ''


function loginDetails() {
    loginUserName = document.getElementById('loginUserName').value.toLowerCase();
    localStorageObject = JSON.parse(localStorage.getItem(loginUserName));
    // console.log(Boolean(localStorageObject))
    if (Boolean(localStorageObject)) {


        // console.log(('score' in localStorageObject))
        var localStorageUserName = JSON.parse(localStorage.getItem(loginUserName)).username;
        var localStoragePassword = JSON.parse(localStorage.getItem(loginUserName)).userPassword;
        var localStorageEmail = JSON.parse(localStorage.getItem(loginUserName)).emailAddress;
        // console.log(localStotageUserName)
        if (!('score' in localStorageObject)) {
            if (loginUserName.trim() !== '') {
                loginPassword = document.getElementById('loginPassword').value.toLowerCase();
                if (loginPassword.trim() !== '') {
                    if (loginUserName === localStorageUserName) {
                        if (loginPassword === localStoragePassword) {
                            document.getElementById('dashboard').classList.remove('hidden');
                            document.getElementById('loginPage').classList.add('hidden');
                            document.getElementById('overlay').classList.add('hidden');
                            document.getElementById('main').classList.add('hidden')
                            document.getElementById('dashboardNav').innerHTML = `
                        <div class="text-white"><i class="fa-solid fa-user text-4xl"></i></div>
                    <div class="text-white mt-3 ml-4 capitalize" id="userName"></div>`
                            document.getElementById('userName').innerHTML = localStorageUserName;
                            document.getElementById('emailFirstPart').innerHTML = (localStorageEmail.split('@')[0].split(/[0-9]/).join('').split('_').join(' ').split('.').join(' '));
                            document.getElementById('loginPassword').value = '';
                            document.getElementById('loginUserName').value = '';
                            // console.log(document.getElementById('header'))
                            // document.getElementById('header').classList.remove('hidden')
                            console.log(document.getElementById('lightMode'))

                        }
                        else {
                            swal.fire({
                                title: 'Invalid Password',
                                text: 'Enter Correct Password',
                                icon: 'error'
                            });
                            document.getElementById('loginPage').classList.remove('hidden');
                            document.getElementById('overlay').classList.remove('hidden');
                            document.getElementById('loginPassword').value = '';
                            document.getElementById('loginPassword').focus();

                        }
                    }
                    else {
                        swal.fire({
                            title: 'Invalid User Name',
                            text: 'Enter Valid User Name',
                            icon: 'error'
                        });
                        document.getElementById('loginPage').classList.remove('hidden');
                        document.getElementById('overlay').classList.remove('hidden');
                        document.getElementById('loginUserName').value = '';
                        document.getElementById('loginPassword').value = '';
                        document.getElementById('loginUserName').focus();
                    }
                }
                else {
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
                    title: 'Username?',
                    text: 'Please Enter UserName',
                    icon: 'error'
                });
                document.getElementById('loginPage').classList.remove('hidden');
                document.getElementById('overlay').classList.remove('hidden');
                document.getElementById('loginUserName').focus();
            }
        } else {
            document.getElementById('resultPage').classList.remove('hidden');
            document.getElementById('loginPage').classList.add('hidden');
            document.getElementById('overlay').classList.add('hidden');
            document.getElementById('main').classList.add('hidden');
            document.getElementById('loginPassword').value = '';
            document.getElementById('loginUserName').value = '';
            swal.fire({
                title: 'Already Attempted',
                text: `Your score is ${localStorageObject.score}`,
                icon: 'question'
            });
            showResult()
        }
    }
    else {
        swal.fire({
            title: 'InValid',
            text: 'This User name is not exit in our data base first creat your Account',
            icon: 'error',
        })
        document.getElementById('loginPassword').value = '';
        document.getElementById('loginUserName').value = '';
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
            localStorageObject.score = score;
            localStorage.setItem(loginUserName, JSON.stringify(localStorageObject))
            showResult();
        }
    }
}

function showResult() {
    var totalQuestion = questions.length;
    var correctQuestion = localStorageObject.score;
    var percentage = (correctQuestion / totalQuestion) * 100;
    document.getElementById('quizPage').classList.add('hidden');
    document.getElementById('resultPage').classList.remove('hidden');
    // setDefault();
    if (percentage > 33) {
        document.getElementById('resultCourseHeading').innerText = localStorageObject.subject;
        document.getElementById('greeting').classList.remove('hidden');
        document.getElementById('totalQuestion').innerText = totalQuestion;
        document.getElementById('correctQuestion').innerText = localStorageObject.score;
        document.getElementById('percentage').innerHTML = `${percentage}%`;
        // document.getElementById('UserName').innerText = JSON.parse(localStorage.getItem(loginUserName)).username;
    }
    else {
        document.getElementById('resultCourseHeading').innerText = localStorageObject.subject;
        document.getElementById('greeting').classList.add('hidden');
        document.getElementById('greetingFail').classList.remove('hidden');
        document.getElementById('totalQuestion').innerText = totalQuestion;
        document.getElementById('correctQuestion').innerText = localStorageObject.score;
        document.getElementById('percentage').innerHTML = `${percentage}%`;
        // document.getElementById('resultUserName').innerText = JSON.parse(localStorage.getItem(loginUserName)).username;
    }

}

function homePage() {
    // document.getElementById('main').classList.remove('hidden');
    // document.getElementById('signUpPage').classList.add('hidden');
    // document.getElementById('loginPage').classList.add('hidden');
    // document.getElementById('dashboard').classList.add('hidden');
    // document.getElementById('quizDashboard').classList.add('hidden');
    // document.getElementById('quizPage').classList.add('hidden');
    // document.getElementById('resultPage').classList.add('hidden');
    // // var questionCount = 0;
    // window.onload = './index.html';
    window.location.href = './index.html'
}

function close_btn() {
    document.getElementById('signUpPage').classList.add('hidden');
    document.getElementById('overlay').classList.add('hidden');
    document.getElementById('loginPage').classList.add('hidden');
}


function quizDashboard() {
    // setDefault();
    var quizCourseSubject = document.getElementById('webDevelopmentSubject').innerText;
    document.getElementById('dashboard').classList.add('hidden');
    document.getElementById('quizDashboard').classList.remove('hidden');
    document.getElementById('quizCourse').innerHTML = document.getElementById('webDevelopment').innerText;
    document.getElementById('quizCourseSubject').innerHTML = `(${quizCourseSubject})`;
    // document.getElementById('UserName').innerHTML = JSON.parse(localStorage.getItem(loginUserName)).username;
    // function toggleAccordion(index) {
    //     content = document.getElementById(`content-${index}`);
    //     content.style.maxHeight = '0';
    //     icon[index - 1].style.setProperty("--transform-degree", "rotate(315deg)");
    // }
    // console.log(userName);
}
var test_subject = '';
function startQuiz(test) {
    // setDefault();
    document.getElementById('quizDashboard').classList.add('hidden');
    document.getElementById('quizPage').classList.remove('hidden');
    // document.getElementById('userName').innerHTML = JSON.parse(localStorage.getItem(loginUserName)).username;
    test_subject = document.getElementById(test).innerText;
    localStorageObject.subject = test_subject;
    localStorage.setItem(loginUserName, JSON.stringify(localStorageObject))
    // console.log(test_subject);
}
window.onload = renderQuestion();
window.onload = setDefault();

// email = 'engr.khan@gmail.com'
// console.log(email.split('@')[0].split(/[0-9]/).join('').split('_').join(' ').split('.').join(' '))
