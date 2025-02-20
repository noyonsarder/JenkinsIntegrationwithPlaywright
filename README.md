# Playwright_Integration_Jenkins

**Steps to Set Up Playwright with Jenkins (Freestyle Project)**
Open the Jenkins Server:

- Go to: http://localhost:8080/
- Click on New Item
- Create a New Jenkins Job:

**Enter a relevant Item Name**
- Select Freestyle Project
- Click OK

**Configure the Job:**

- Under the General section, enter a description for the job
  
**Configure Source Code Management (SCM)**:

- Scroll down to the Source Code Management section
- Select Git
- Enter your Repository URL
- Select the appropriate Credentials (configured under Manage Jenkins > Security > Credentials)
- Specify your branch (e.g., main or develop)
  
**Configure the Environment**:

- Scroll down to the Build Environment section
- Check the option "Delete workspace before build starts"

**Configure Build Steps**:

- Scroll down to the Build Steps section
- Click on "Add build step"
- Select "Execute Node.js script"
From the drop-down, select your Node.js installation (configured under Manage Jenkins > Tools > Node.js Installation)
- Click "Add build step" again
- Select "Execute Windows batch command" and enter the following command:
npm install && npx playwright install && npx playwright test

**Post-Build Actions (Reports & Artifacts)**:

- Scroll down to the Post-build Actions section
- Add the following reports:
- Allure Report: Generates the Allure report
- Publish JUnit test result report: Publishes test results in JUnit format
- Archive the artifacts: Archives test results and reports
- Save and Build the Job:

- Click Save
- Click Build Now to trigger the job
