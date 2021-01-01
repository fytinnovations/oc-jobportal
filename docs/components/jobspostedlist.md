---
sidebarDepth: 3
---

# Jobs Posted List 

Displays a list of jobs posted by the user. 

## Properties

| Property            | Description                                                           | Default                      | Required |
|---------------------|-----------------------------------------------------------------------|------------------------------|----------|
| editPage            | The page to redirect when the employer wants to edit the job details. | job                          | No       |
| jobApplicationsPage | The page where the user can see which candidates applied to the job.  | job                          | No       |
| noJobsMessage       | Message to displayed when the employer has not posted any jobs.       | You have not posted any jobs | No       |


## Sample Usage
  
  ```ini
  title = "My Posted Jobs"
  url = "accountposted-jobs"
  layout = "default"
  
  [jobsPostedList]
  editPage = "jobedit"
  jobApplicationsPage = "jobapplications"
  noJobsMessage = "You have not posted any jobs"
  ```
  ```twig
  {% component 'jobsPostedList' %}
  ```

