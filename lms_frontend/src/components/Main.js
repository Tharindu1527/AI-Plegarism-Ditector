import Header from './Header';
import Home from './Home';
import About from './About'; 
import Login from './User/Login';
import Register from './User/Register';
import Dashboard from './User/Dashboard'
import MyCourses from './User/MyCourses';
import FavoriteCourses from './User/FavoriteCourses';
import RecomendedCourses from './User/RecommendedCourse';
import Footer from './Footer';
import CourseDetail from './CourseDetail';
import { Route ,Routes } from 'react-router-dom';
import ProfileSettings from './User/ProfileSettings';
import ChangePassword from './User/ChangePassword';
import LecturerDetail from './Lecturer/LecturerDetail';
//Lecturer
import LecturerLogin from './Lecturer/LecturerLogin';
import LecturerRegister from './Lecturer/LecturerRegister';
import LecturerDashboard from './Lecturer/LecturerDashboard';
import AddCourses from './Lecturer/AddCourse';
import UserList from './Lecturer/UserList';
import LecturerChangePassword from './Lecturer/LecturerChangePassword';
import LecturerProfileSettings from './Lecturer/LecturerProfileSetting';
import LecturerCourses from './Lecturer/LecturerCourses';

//list
import AllCourses from './AllCourses';
import PopularCourses from './PopularCourses';
import PopularLecturers from './PopularLecturers';
import CategoryCoursers from './CategoryCourses';


function Main() {
  return (
    <div className="App">
     <Header/>
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/detail/:course_id" element={<CourseDetail/>}/>
        <Route path="/user-login" element={<Login/>}/>
        <Route path="/user-register" element={<Register/>}/>
        <Route path="/user-dashboard" element={<Dashboard/>}/>
        <Route path="/my-courses" element={<MyCourses/>}/>
        <Route path="/favorite-courses" element={<FavoriteCourses/>}/>
        <Route path="/recommended-course" element={<RecomendedCourses/>}/>
        <Route path="/profile-settings" element={<ProfileSettings/>}/>
        <Route path="/change-password" element={<ChangePassword/>}/>
        <Route path="/lecturer-login" element={<LecturerLogin/>}/>
        <Route path="/lecturer-register" element={<LecturerRegister/>}/>
        <Route path="/lecturer-change-password" element={<LecturerChangePassword/>}/>
        <Route path="/lecturer-dashboard" element={<LecturerDashboard/>}/>
        <Route path="/lecturer-profile-settings" element={<LecturerProfileSettings/>}/>
        <Route path="/user-list" element={<UserList/>}/>lecturer
        <Route path="/add-courses" element={<AddCourses/>}/>
        <Route path="/lecturer-courses" element={<LecturerCourses/>}/>
        <Route path="/lecturer-detail/:lecturer_id" element={<LecturerDetail/>}/>
        <Route path="/all-courses" element={<AllCourses/>}/>
        <Route path="/popular-courses" element={<PopularCourses/>}/>
        <Route path="/popular-lecturers" element={<PopularLecturers/>}/>
        <Route path="/category/:categry_slug" element={<CategoryCoursers/>}/>
     </Routes>
     <Footer/>
    </div>
  );
}

export default Main;