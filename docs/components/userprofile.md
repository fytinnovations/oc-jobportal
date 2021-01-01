---
sidebarDepth: 3
---

# User Profile 

Allow the user to upload and update his resume 

## Sample Usage
  
  ```ini
  title = "Account"
  url = "account"
  layout = "default"
  
  [account]
  paramCode = "code"
  forceSecure = 0
  requirePassword = 0
  
  [userProfile]
  ```
  ```twig
  {% component 'account' %}
  
  {% if user %}
  
  {% component 'userProfile' %}
  
  {% endif %}
  ```

