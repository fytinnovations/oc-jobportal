---
sidebarDepth: 3
---

# Job Form 

Displays a form through which an employer can post a job 

## Properties

| Property                | Description                                          | Default                                                                                    | Required |
|-------------------------|------------------------------------------------------|--------------------------------------------------------------------------------------------|----------|
| redirect                | Page name to redirect to after posting the job       | /account/my-posted-jobs                                                                    | No       |
| accountPage             | Page to redirect the user from where he can login    | /account                                                                                   | No       |
| companyFormPage         | Page to redirect the user where he create companies  | /account/create-company                                                                    | No       |
| jobPostedSuccessMessage | Message to be displayed when the job has been posted | You job has been posted. We will notify you once the job is published after admin approval | Yes      |


## Sample Usage
  
  ```ini
  title = ""Post Job"
  url = "jobpost"
  layout = "default"
  is_hidden = 0
  
  [jobForm]
  redirect = "accountposted-jobs"
  accountPage = "account"
  companyFormPage = "accountcreate-company"
  ```
  ```twig
  {% component 'jobForm' %}
  ```

