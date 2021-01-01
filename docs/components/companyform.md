---
sidebarDepth: 3
---

# Company Form 

Displays a form through which user can create or update his company information 

## Properties

| Property                     | Description                                                     | Default                    | Required |
|------------------------------|-----------------------------------------------------------------|----------------------------|----------|
| redirect                     | Page name to redirect after creating the company                | account/companies          | No       |
| companyCreatedSuccessMessage | Message to be displayed when the company creation is successful | Company have been created. | Yes      |


## Sample Usage
  
  ```ini
  title = "Create a Company"
  url = "accountcompanycreate"
  layout = "default"
  is_hidden = 0
  
  [companyForm]
  redirect = "accountcompanies"
  ```
  ```twig
  {% component 'companyForm' %}
  ```

