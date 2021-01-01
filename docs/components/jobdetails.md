---
sidebarDepth: 3
---

# Job Details 

Displays details of a job based on the passed in slug. 

## Properties

| Property                       | Description                                          | Default                           | Required |
|--------------------------------|------------------------------------------------------|-----------------------------------|----------|
| applicationSuccessMessage      | Message to display when the user applies for the job | Thankyou for applying for the job | Yes      |
| applicationSuccessRedirectPage | Page to redirect when the application is successful. | /jobs                             | Yes      |


## Sample Usage
  
  ```ini
  title = "Job details"
  url = "job:job_slug"
  layout = "default"
  is_hidden = 0
  
  [Fytinnovations\JobPortal\Components\JobDetails jobDetails]
  applicationSuccessMessage = "Thankyou for applying to the job post"
  applicationSuccessRedirectPage = "jobs"
  ```
  ```twig
  {% component 'jobDetails' %}
  ```

