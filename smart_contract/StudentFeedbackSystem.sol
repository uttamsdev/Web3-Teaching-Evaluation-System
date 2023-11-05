// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract StudentFeadbacks{
    address public owner; 
    constructor() {
        owner = msg.sender; 
    }
    struct Feedback{
        string courseCode; 
        string rating;
        string comment; 
    }
    struct Faculty{
        address _to;
        string courseCode; 
        string rating;
        string comment;
    }
    struct TakenCourse{
        address facultyAddress; 
        string facultyName;
        string courseCode;
        string courseTitle;
        bool assign;
    }
      struct CourseEnroll{
      address facultyAddress;
      string courseCode;
      string courseTitle;
      string faculty;
  }
    struct Course{
        address to; 
        string facultyName;
        string courseCode;
        string courseTitle;
    }
     struct UserAccount {
        address userAddress;
      string username;
      string password;
      string role;
  }
    mapping(string => TakenCourse) takenCourses; 
    mapping(string => Feedback[]) studentFeedbacks;
    mapping(address=> mapping(string=>bool)) feedbackTrack; 
    mapping(address=> mapping(string=>bool)) courseEnrollTrack; 
    mapping(address => bool) existfaculty;  
    mapping(address => Course[]) facultyCourses;
    mapping(address => Course[]) allCourseOfAdmin;
    mapping(string => UserAccount[]) userAccount;
    mapping(address => CourseEnroll[]) courseEnroll; // student's assigned courses
    
    
    Course[] allCourses;
    Faculty[] private feedbacks;
    UserAccount[] private userAccounts;

    modifier onlyOwner(){
        require(msg.sender==owner, "You are not allowed"); 
        _;
    }
    
    function addCourses(address _to, string memory _facultyName, string memory _courseCode, string memory _courseTitle) public onlyOwner {
        require( takenCourses[_courseCode].assign==false, "Already Assigned");
        facultyCourses[_to].push(Course(_to, _facultyName, _courseCode, _courseTitle));
        takenCourses[_courseCode] = TakenCourse(_to,_facultyName, _courseCode, _courseTitle, true); 
        allCourses.push(Course(_to, _facultyName,_courseCode, _courseTitle));
        allCourseOfAdmin[owner].push(Course(_to, _facultyName, _courseCode, _courseTitle));
    }

    function submitFeedback(address _to, string memory _courseCode, string memory _rating, string memory _comment) public{
        require( msg.sender!=_to ); 
        require(takenCourses[_courseCode].facultyAddress==_to, "Address does not match with faculty account");
        require(!feedbackTrack[msg.sender][_courseCode], "Your feedback already exist"); 
        studentFeedbacks[_courseCode].push(Feedback({
            courseCode: _courseCode,
            rating: _rating, 
            comment: _comment
        }));
        
        feedbackTrack[msg.sender][_courseCode] = true; 
        feedbacks.push(Faculty(_to, _courseCode, _rating, _comment)); 
    }

    function createUserAccount(address _userAddress, string memory _username, string memory _password, string memory _role) public onlyOwner {
      userAccount[_username].push(
          UserAccount(_userAddress, _username, _password, _role)
      );
      userAccounts.push(UserAccount(_userAddress, _username, _password, _role));
  }
  

    function getFeedbackByAddress(string memory _courseCode) public view returns(Feedback[] memory){
        return studentFeedbacks[_courseCode]; 
    }

    function getCourseByAddress() public view returns(Course[] memory){
        return facultyCourses[msg.sender];
    }

    function getAllFeedbacks() public view onlyOwner returns(Faculty[] memory){
        return feedbacks;
    }

    function getAllCourses() public view returns(Course[] memory){
        return allCourses;
    }

    function getUserAccount(string memory _username) public view returns(UserAccount[] memory) {
      return userAccount[_username];
  }

  function getAllUserAccount() public view onlyOwner returns(UserAccount[] memory) {
      return userAccounts;
  }

   function getEnroll(address _facultyAddress, string memory _courseCode, string memory _courseTitle, string memory _faculty) public {
    require(msg.sender!=owner, "You are admin you can not register course");
    require(courseEnrollTrack[msg.sender][_courseCode]==false, "Your already enrolled into this course"); 
    courseEnroll[msg.sender].push(CourseEnroll(_facultyAddress, _courseCode, _courseTitle, _faculty));
    courseEnrollTrack[msg.sender][_courseCode] = true; //keeping couse enroll track
  }

  function getEnrolledCourses() public view returns (CourseEnroll[] memory){
      return courseEnroll[msg.sender];
  }

  function getAllCourseOfAdmin() public  view onlyOwner  returns(Course[] memory){
      return allCourseOfAdmin[owner];
  }

}