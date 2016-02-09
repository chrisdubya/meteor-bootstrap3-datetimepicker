Package.describe({
    name: 'chrisdubya:bootstrap-datetimepicker',
    summary: "Bootstrap 3 DateTime Picker Wrapper for Meteor.'",
    version: "1.1.4",
    git: "https://github.com/chrisdubya/meteor-bootstrap3-datetimepicker.git"
});

Package.onUse(function (api) {
    api.versionsFrom('1.2.1');
    api.use(['jquery', 'momentjs:moment@2.11.2'], 'client');
    var assets = [
      'dist/fonts/glyphicons-halflings-regular.eot',
      'dist/fonts/glyphicons-halflings-regular.svg',
      'dist/fonts/glyphicons-halflings-regular.ttf',
      'dist/fonts/glyphicons-halflings-regular.woff',
      'dist/fonts/glyphicons-halflings-regular.woff2'
    ];
    if (api.addAssets) {
      api.addAssets(assets, 'client');
    } else {
      api.addFiles(assets, 'client', { isAsset: true });
    }
    api.addFiles('dist/js/bootstrap.min.js', 'client');
    api.addFiles('dist/js/bootstrap-datetimepicker.js', 'client');
    api.addFiles('dist/js/angular-bootstrap-datetimepicker-directive.js', 'client');
    api.addFiles([
      'dist/css/bootstrap.min.css',
      'dist/css/bootstrap-theme.min.css',
      'dist/css/bootstrap-datetimepicker.css'
    ], 'client');
});
