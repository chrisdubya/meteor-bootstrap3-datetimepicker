# A [Meteor](http://meteor.com) Bootstrap 3 DateTime picker from [Eonasdan](https://github.com/Eonasdan/bootstrap-datetimepicker)

## Installation

### 1. Add the package

```
meteor add chrisdubya:bootstrap3-datetimepicker
```

## Usage

### 1. Minimum Setup

```
  <div class="container">
      <div class="row">
          <div class='col-sm-6'>
              <div class="form-group">
                  <div class='input-group date' id='datetimepicker1'>
                      <input type='text' class="form-control" />
                      <span class="input-group-addon">
                          <span class="glyphicon glyphicon-calendar"></span>
                      </span>
                  </div>
              </div>
          </div>
          <script type="text/javascript">
              $(function () {
                  $('#datetimepicker1').datetimepicker();
              });
          </script>
      </div>
  </div>
```
* for more implementations see:  http://eonasdan.github.io/bootstrap-datetimepicker/
