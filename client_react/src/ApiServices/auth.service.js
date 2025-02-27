//
//
import axios from './axiosUrl'

class AuthServices {

    // --------------------- Authentication routes --------------------------

    // fetching
    // RefreshToken(data) {
    //     return axios.post('/auth/token', data);
    // }

    register(data) {
        return axios.post('/api/auth/register', data)
    }

    // otp(data) {
    //     return axios.post("/signup/otp", data)
    // }
    //
    // otpResend(data) {
    //     return axios.post('/signup/otp-resend', data)
    // }


    login(data) {
        return axios.post('/api/auth/login', data)
    }

    // VerifyEmail(data) {
    //     return axios.post('/signup/resetOtp', data)
    // }
    //
    // VerifyOtp(data) {
    //     return axios.post('/signup/checkOtp', data)
    // }

    // ResetPassword(data) {
    //     return axios.post('/signup/reset-password', data)
    // }

    logout() {
       localStorage.clear()
    }


    getCurrentUser() {
        return localStorage.getItem('user');
    }

    getUserName() {
        let userName=localStorage.getItem('userName')
        if (userName != null)
            userName = userName.charAt(0).toUpperCase() + userName.slice(1)
        return userName
    }


    // General Coursera routes

    // storing courses in a redux store

    AllCourses() {
        return axios.get('/api/home/allCourses')
    }

    HomepageCourse(CourseLink) {
        return axios.get(`/api/home/${CourseLink}`)
    }

    PreferenceCourse(CourseLink, data) {
        return axios.post(`/api/home/${CourseLink}`, data,{
            headers: {
                Authorization: 'Bearer '+ localStorage.getItem('user') + " " + localStorage.getItem('ref_token')
            }
        })
    }

    UpdatedCourse(data) {
        return axios.put('/api/creator/course/update', data);
    }

    //Bookmark
    bookmarkCourses(userName,userId) {
        return axios.get(`/api/course/users/${userName}/${userId}`,{
            headers: {

                Authorization: 'Bearer '+ localStorage.getItem('user') + " " + localStorage.getItem('ref_token')
            }
        });
    }

    DeleteBookmark(data) {
        return axios.post("/api/course/unbookmark", data,{
            headers: {

                Authorization: 'Bearer '+ localStorage.getItem('user') + " " + localStorage.getItem('ref_token')
            }
        });
    }


    BookMark(CourseId,CourseName, data) {
        return axios.post(`/api/course/home/${CourseId}/${CourseName}`, data,{
            headers: {

                Authorization: 'Bearer '+ localStorage.getItem('user') + " " + localStorage.getItem('ref_token')
            }
        })
    }


    Download(CourseId) {
        return axios.get(`/api/course/pdf/download/${CourseId}`)
    }



    FetchCourses(CourseName, CourseId) {
        return axios.get(`/api/course/${CourseName}/${CourseId}`, {
            headers: {
                Authorization: 'Bearer '+ localStorage.getItem('user') + " " + localStorage.getItem('ref_token')
            }
        })
    }

    Rating(data) {
        return axios.put("/api/course/rating", data,{
            headers: {
                Authorization: 'Bearer '+ localStorage.getItem('user')
            }
        })
    }

    TeacherHomePage(data) {
        return axios.post("/api/creator/homepage", data, {
            headers: {
                Authorization: 'Bearer '+ localStorage.getItem('user') + " " + localStorage.getItem('ref_token')
            }
        })
    }

    CourseDelete(data) {
        return axios.post("/api/course/delete", data, {
            headers: {
                Authorization: 'Bearer '+ localStorage.getItem('user')
            }
        })
    }

}

export default new AuthServices();
