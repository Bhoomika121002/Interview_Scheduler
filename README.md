# CHIME - Let's Connect 

## INTRODUCTION

The advent of cloud technology has revolutionized various aspects of modern business operations, including the realm of human resources. This project delves into the innovative landscape of cloud-based interview schedulers, a crucial tool in streamlining the recruitment process. By harnessing the benefits of the cloud, organizations can seamlessly coordinate interviews, optimize scheduling efficiency, and enhance candidate experiences. The evolution of cloud technology has fundamentally reshaped the landscape of modern business operations. Among its many applications, cloud-based interview schedulers have emerged as a transformative solution in the realm of human resources. 

The system architecture for "CHIME: Let's Connect" encompasses a well-structured frontend built with EJS to provide user-friendly interfaces for recruiters and applicants. The frontend facilitates interview slot management, invitation sending, and response tracking for recruiters. On the backend, Node.js and Express.js power a RESTful API that manages HTTP requests, handles core application logic, and interfaces with the MongoDB database. The database is organized into collections for various data types, ensuring efficient querying and scheduling algorithms. For robust hosting and scalability, the system leverages cloud infrastructure using AWS, Google Cloud and MongoDB Atlas for cloud-based database management.

"CHIME: Let's Connect" adopts a modern system architecture that combines EJS for the frontend, Node.js and Express.js for the backend, and MongoDB for data storage. Cloud infrastructure choices enhance scalability and reliability, making it a well-rounded solution for efficient interview scheduling and management.

In an era marked by increased global connectivity and remote work, the ability to efficiently coordinate interviews across time zones and locations is paramount. Cloud-based **interview schedulers** offer organizations a dynamic platform to manage and streamline this intricate process. By centralizing scheduling, they eliminate the complexities of coordinating between multiple stakeholders, optimizing the recruitment pipeline's efficiency.

Moreover, these solutions enhance the candidate experience, offering flexibility and ease of use. Applicants can conveniently select interview slots that align with their schedules, fostering a positive impression of the hiring organization.

## PROBLEM STATEMENT
In today's fast-paced work environment, coordinating and managing daily meetings efficiently is a challenge that many individuals and teams face. The process of manually scheduling meetings, finding suitable time slots, and accommodating participants' availability can be time-consuming and error-prone. This often leads to missed meetings, overlapping schedules, and decreased productivity.

## OBJECTIVES
• To distribute incoming tasks or jobs based on importance evenly across available resources to prevent resource bottleneck and also help users to get information according to the requirements. 

• To generate instant notifications for real time communication with clientele. 

• To deploy schedulers on the cloud to ensure high availability of applications and services by distributing tasks across multiple servers or instances.

## METHODOLOGY
We will be creating a comprehensive system architecture for "CHIME: Let's Connect" will involve designing the overall structure of the application, including its components, databases, and the interaction between various elements. Additionally, determining the cloud infrastructure and technologies is essential for hosting and scaling the application.


System Architecture:
1. Frontend: 
The user-friendly interfaces for both recruiters and applicants are a critical part of the system. Using EJS (Embedded JavaScript) for the front end, which is a good choice for generating dynamic HTML content. Here's how you can structure it:
Recruiter Interface: This interface is designed for recruiters to create, manage, and schedule interviews. It should include features like creating interview slots, sending invitations using mail, tracking candidate responses, and integrating Google Calendar for saving the dates. 

2. Backend: 
Using Node.js and Express.js for the backend. This is a robust choice for building a RESTful API to handle requests and manage the application's logic.
API Layer: This layer is responsible for handling HTTP requests from the frontend, processing data, and interacting with the database. It should include endpoints for creating, updating, and deleting interview slots, sending invitations, and handling applicant responses.
Business Logic: Implement the core business logic for scheduling interviews, avoiding time clashes, and sending notifications or reminders to both recruiters and applicants.

3. Database: 
MongoDB Cloud is the database for storing user calendar data and other relevant information. Organize our data into collections for recruiters, applicants, interviews, and time slots. This ensures that data is structured efficiently to support querying and scheduling algorithms.

4. Cloud Infrastructure and Technologies:
Cloud Platform: We’ll use a cloud platform like Amazon Web Services (AWS) and Google Cloud.
Server Hosting: We are going to Deploy our Node.js application on cloud platforms like Render and then create a development instance of AWS EC2 and use Docker and Jenkins(Continuous building tool) for checking if our application has errors or not .
Google Calendar API: This is used to mark the slots for the booked interview on the Google Calendar so that a person can keep track of their aligned interviews. 
Database Hosting MongoDB Atlas is a cloud-based MongoDB service that integrates seamlessly with cloud platforms. It offers managed database clusters, automated backups, and high availability.

5. Devops
DevOps practices play a crucial role in ensuring the smooth integration, deployment, and continuous improvement of the CHIME application. Docker and Jenkins are fundamental tools in this process.

Docker: (Containerization and Orchestration)

Docker is employed to containerize the Node.js application and its dependencies. Containers provide consistency across development, testing, and production environments. Each component of the application, including the Node.js server, can run in a lightweight, isolated container, ensuring easy deployment and scalability. Docker allows for efficient resource utilization and helps mitigate the classic "it works on my machine" problem.


Jenkins Pipeline: (Continuous Integration and Continuous Deployment (CI/CD))

Jenkins plays a pivotal role in the Continuous Integration and Continuous Deployment (CI/CD) pipeline for the CHIME: Let's Connect application. By connecting to the version control system, such as GitHub, Jenkins automatically triggers the pipeline upon code changes. The process involves building Docker images and running tests to validate the codebase's integrity. Subsequently, the built Docker images are pushed to a container registry, enabling accessibility for deployment. Jenkins seamlessly orchestrates the deployment of the application to cloud platforms like AWS or Google Cloud, fostering automation and reducing the likelihood of errors. The CI/CD pipeline provides rapid feedback on code changes, expediting issue identification and resolution, while the automated deployment process facilitates easy scalability based on demand, ensuring a consistent and reliable deployment lifecycle.

![image](https://github.com/Bhoomika121002/Interview_Scheduler/assets/78655015/1c0fe4f3-1aa1-4d0b-a3d7-c80c146cdfb6)

## IMPLEMENTATION

![image](https://github.com/Bhoomika121002/Interview_Scheduler/assets/78655015/17ab2d17-b957-43bb-8844-04a8979e0e7e)

![image](https://github.com/Bhoomika121002/Interview_Scheduler/assets/78655015/1139130d-3386-4322-8d12-dcfa0e2c583a)

![image](https://github.com/Bhoomika121002/Interview_Scheduler/assets/78655015/10d76a6a-e29e-4758-bad7-ece2b19d812f)

![image](https://github.com/Bhoomika121002/Interview_Scheduler/assets/78655015/1f897e66-c14c-4330-bba1-dff7578c1303)

![image](https://github.com/Bhoomika121002/Interview_Scheduler/assets/78655015/14eb500c-1834-4328-9eb4-d3b70e08e7da)

GOOGLE CLOUD INTEGRATION: 

![Screenshot (1172)](https://github.com/Bhoomika121002/Interview_Scheduler/assets/78655015/1fade323-22b3-40f3-911d-9ebd3d54bbef)

![Screenshot (1173)](https://github.com/Bhoomika121002/Interview_Scheduler/assets/78655015/18cce237-5f10-4de4-bdb2-686fe5435465)

![image](https://github.com/Bhoomika121002/Interview_Scheduler/assets/78655015/b22c3bfa-3ff2-45bc-982d-6ce8b7d2db51)

![image](https://github.com/Bhoomika121002/Interview_Scheduler/assets/78655015/b9f8c961-5e2b-4976-a37a-bb176ceaae67)

DOCKERFILE:

![image](https://github.com/Bhoomika121002/Interview_Scheduler/assets/78655015/d6b0f45a-88be-4358-8051-18815f80efe3)

OUTPUT SCREENSHOTS: 

![image](https://github.com/Bhoomika121002/Interview_Scheduler/assets/78655015/0a66e5ff-6aa6-489d-84a5-75d583367609)

![image](https://github.com/Bhoomika121002/Interview_Scheduler/assets/78655015/ca94ddac-ea56-4142-9629-3466d2eff866)

![image](https://github.com/Bhoomika121002/Interview_Scheduler/assets/78655015/c0a50b31-7078-4a7d-a75f-1140443c6737)

![image](https://github.com/Bhoomika121002/Interview_Scheduler/assets/78655015/a9fdc461-ea29-4924-81fb-ccbbd194d98d)

![image](https://github.com/Bhoomika121002/Interview_Scheduler/assets/78655015/2d74cae8-ca71-4ee3-9cad-d83bff5a7c85)

![image](https://github.com/Bhoomika121002/Interview_Scheduler/assets/78655015/5be2bccf-d1b2-4244-9840-16c1c1bb49e9)

![image](https://github.com/Bhoomika121002/Interview_Scheduler/assets/78655015/9104f1ce-6aa7-474e-b523-18793f5bbdd3)

![image](https://github.com/Bhoomika121002/Interview_Scheduler/assets/78655015/9e3d5097-c8e8-460b-ad2e-4868fcc19ea3)

DEPLOYMENT: 
![image](https://github.com/Bhoomika121002/Interview_Scheduler/assets/78655015/b802862f-8ea9-4c08-9164-b822284c5fa2)

![image](https://github.com/Bhoomika121002/Interview_Scheduler/assets/78655015/aac3b9b6-94b4-4618-a989-0b20260906ed)

![image](https://github.com/Bhoomika121002/Interview_Scheduler/assets/78655015/af9ea0d1-1854-496f-81c1-6e6a2541bca5)

![image](https://github.com/Bhoomika121002/Interview_Scheduler/assets/78655015/af4b6ea2-0d0e-41a6-90c1-f1de343d8cde)

![image](https://github.com/Bhoomika121002/Interview_Scheduler/assets/78655015/5a7058c8-d854-4775-a70d-81c1cc93c208)

![image](https://github.com/Bhoomika121002/Interview_Scheduler/assets/78655015/2bb99fc1-8d46-4a47-8b56-4f024fda66ae)

![image](https://github.com/Bhoomika121002/Interview_Scheduler/assets/78655015/997e96f8-2a7f-4f47-8be1-8d27a4b7f368)

![image](https://github.com/Bhoomika121002/Interview_Scheduler/assets/78655015/042ec551-6ebf-4ad9-aec1-780267b1c4cd)

![image](https://github.com/Bhoomika121002/Interview_Scheduler/assets/78655015/3d90bc7b-ae40-48b2-bc15-e62e7b458d65)

![image](https://github.com/Bhoomika121002/Interview_Scheduler/assets/78655015/9b8cfa6c-a8fd-49d7-b2ce-70be1d74c7b9)

![image](https://github.com/Bhoomika121002/Interview_Scheduler/assets/78655015/ed8b844c-5cc7-4061-9b35-9c1cb6738a6a)

![image](https://github.com/Bhoomika121002/Interview_Scheduler/assets/78655015/ed9901ec-108c-47c9-8967-a7fae803d297)

![image](https://github.com/Bhoomika121002/Interview_Scheduler/assets/78655015/bacfd780-2797-4e41-af72-fcff3b5337fa)

![image](https://github.com/Bhoomika121002/Interview_Scheduler/assets/78655015/be9f810b-9cd2-4b22-bdf5-ad819c959b11)

![image](https://github.com/Bhoomika121002/Interview_Scheduler/assets/78655015/90be0a0f-b53d-4c33-92a5-92496949bc07)

![image](https://github.com/Bhoomika121002/Interview_Scheduler/assets/78655015/57b4cf9d-88c1-44d6-866c-45aff613a67c)

![image](https://github.com/Bhoomika121002/Interview_Scheduler/assets/78655015/7e517ae7-dc62-4f88-b02a-f2c8c751c9cc)

![image](https://github.com/Bhoomika121002/Interview_Scheduler/assets/78655015/cd43f70e-d967-44f6-ba60-0b5db94257d2)

![image](https://github.com/Bhoomika121002/Interview_Scheduler/assets/78655015/edf8a889-fbf5-471c-9884-5a48f4363568)

![image](https://github.com/Bhoomika121002/Interview_Scheduler/assets/78655015/58889e5a-d2b5-4553-aa26-2263ede1c5c6)

![image](https://github.com/Bhoomika121002/Interview_Scheduler/assets/78655015/bb0caba3-c39e-4876-a880-b82f0ec762d8)

![image](https://github.com/Bhoomika121002/Interview_Scheduler/assets/78655015/09e45c27-4d23-459e-8a1b-d606033779b3)

![image](https://github.com/Bhoomika121002/Interview_Scheduler/assets/78655015/1bd933b3-b9d3-45ee-8522-b6fb69cc739f)


## CONCLUSION
In this project, we will design and develop an application for interview scheduling.

• Users will have access to this application in order to view their assigned slots for the interview.
• It will be simpler for people to obtain the required details concerning their interview.
• It will save a lot of time, effort, and money as well as a large amount of paperwork for the interviewer as well as the learner.

Technological advancements have caught up with most industries and the smaller tasks they conduct. The scheduling and management of interviews is no exception. 
Proven online scheduling software is now readily available to all-sized organizations and for all scheduling needs, regardless of the scope of the job, the number of staff members, and their budgets. This technology can transform the daunting process of scheduling and enable them to run more efficiently and profitably.

## REFERENCES
[1] Thalawattha, Sathsara & Vidanagama, Dushyanthi. (2021). A Survey on Web-based Meeting Scheduling Application. 

[2] Perera, Poornima & Vidanagama, Dushyanthi. (2020). A WEB-BASED PAPERLESS MEETING MANAGEMENT SYSTEM. 

[3] Erik Timmerman, C., Shik Choi, C., 2017. Meeting Technologies. https://doi.org/10.1002/9781118955567.wbieoc132

[4] Tran, Linh & Stojcevski, Alex & Pham, Thanh & Souza-Daw, Tony & Nguyen, Nhan & Nguyen, Vinh & Nguyen, Chau. (2016). A smart meeting room scheduling and management system with utilization control and ad-hoc support based on real-time occupancy detection. 186-191. 10.1109/CCE.2016.7562634. 




