---
sidebarDepth: 3
---

# Job Applications 

Displays a list of applications for a job. 

## Properties

| Property               | Description                                                       | Default | Required |
|------------------------|-------------------------------------------------------------------|---------|----------|
| applicationDetailsPage | The page to redirect where the user can view application details. | job     | No       |


## Sample Usage
  
  ```ini
  title = "Job applications"
  url = "job:job_idapplications"
  layout = "default"
  is_hidden = 0
  
  [jobApplications]
  applicationDetailsPage = "applicationdetails"
  ```
  ```twig
  {% component 'jobApplications' %}
  ```

