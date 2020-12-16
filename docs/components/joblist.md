---
sidebarDepth: 3
---

# JobList

This component displays a list of published jobs along with filters by category and pagination for those long lists.

## Properties

| Value       | Description                                                                                                          | Default | Required |
|-------------|----------------------------------------------------------------------------------------------------------------------|---------|----------|
| detailsPage | Name of the job details page file for the full job display.  This property is used by the default component partial. | job/details     | Yes       |
| jobsPerPage | Max number of job posts to display on the page. If it exceeds pagination is generated                               | 5       | Yes       |

## Sample Page

### Page Settings
```ini
title = "Jobs"
url = "/jobs"
layout = "default"
description = "This page displays a list of published jobs"
is_hidden = 0

[jobList]
detailsPage = "job/details"
jobsPerPage = 4
```
### Introductory Section
```html
<div class="jumbotron title-js">
    <div class="container">
        <div class="row">
            <div class="col-8">
                <h1>Perfect place for your next job hunt!</h1>
                <p>Please check the list of jobs posted below and make your career bright.</p>
            </div>
        </div>
    </div>
</div>
```
### Displaying the component
```twig
<div class="container">
    {% component 'jobList' %}
</div>
```