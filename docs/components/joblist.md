---
sidebarDepth: 3
---

# Job List 

Displays a list of published jobs. 

## Properties

| Property      | Description                                                                                                              | Default       | Required |
|---------------|--------------------------------------------------------------------------------------------------------------------------|---------------|----------|
| detailsPage   | Name of the job details page file for the full job display. This property is used by the default component partial.      | job/details   | Yes      |
| jobsPerPage   |                                                                                                                          | 5             | Yes      |
| noJobsMessage | Message to display in the job list in case if there are no jobs. This property is used by the default component partial. | No jobs found | Yes      |


## Sample Usage
  
  ```ini
  title = "Jobs"
  url = "jobs"
  layout = "default"
  description = "This page displays a list of jobs"
  
  [Fytinnovations\JobPortal\Components\JobList jobList]
  detailsPage = "jobdetails"
  jobsPerPage = 5
  noJobsMessage = "No jobs found"
  ```
  ```twig
  {% component 'jobList' %}
  ```

