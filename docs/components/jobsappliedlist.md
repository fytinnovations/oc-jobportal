---
sidebarDepth: 3
---

# Jobs Applied List 

Displays a list of jobs applied by the user. 

## Properties

| Property              | Description                                                                                                         | Default                          | Required |
|-----------------------|---------------------------------------------------------------------------------------------------------------------|----------------------------------|----------|
| detailsPage           | Name of the job details page file for the full job display. This property is used by the default component partial. | job                              | No       |
| noApplicationsMessage | Message to displayed when the user has not applied to any jobs.                                                     | You have not applied to any jobs | No       |


## Sample Usage
  
  ```ini
  title = "My Applications"
  url = "accountapplications"
  layout = "default"
  is_hidden = 0
  
  [jobsAppliedList]
  detailsPage = "jobdetails"
  ```
  ```twig
  {% component 'jobsAppliedList' %}
  ```

