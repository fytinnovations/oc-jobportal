---
sidebarDepth: 3
---

# Companies Created List 

Displays a list of companies created by the user 

## Properties

| Property                     | Description                                                       | Default                    | Required |
|------------------------------|-------------------------------------------------------------------|----------------------------|----------|
| createPage                   | The page to redirect when the employer wants to create a company. | job                        | No       |
| editPage                     | The page to redirect when the employer wants to edit a company.   | job                        | No       |
| companyDeletedSuccessMessage | Company have been deleted                                         | Company have been deleted. | Yes      |


## Sample Usage
  
  ```ini
  title = "My Companies"
  url = "accountcompanies"
  layout = "default"
  is_hidden = 0
  
  [companiesCreatedList]
  createPage = "accountcreate-company"
  editPage = "accountedit-company"
  ```
  ```twig
  {% component 'companiesCreatedList' %}
  ```

