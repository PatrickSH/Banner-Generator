<!DOCTYPE html>

<head>
    <script src="js/jquery-3.3.1.min.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <script src="js/overrides.js"></script>
    <script src="js/dropzone.js"></script>
    <script src="js/global.js"></script>
    <script src="js/style-handler.js"></script>
    <script src="js/edit-element.js"></script>
    <script src="js/animations.js"></script>
    <script src="js/renderanimationjavascript.js"></script>
    <script src="js/export.js"></script>
    <script src="js/controls.js"></script>
    <link rel="stylesheet" type="text/css" href="banner-specific/css/banner-style.css">
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <link rel="stylesheet" type="text/css" href="css/exportbox.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</head>
<body>
    <div class="menu shrink_when_menu_hidden">
        <div class="create-new-element-menu active shrink_when_menu_hidden">
            <div class="controls">
                <div class="menu-toolbar">
                    <div class="close"></div>
                </div>
                <div class="menu-header hide_when_menu_hidden">
                    <div class="columnHeader">Add new elements</div>
                    <div class="back"></div>
                </div>
                <div id="accordion" class="hide_when_menu_hidden">
                    <?php include 'Editor-Partials/Controls/controls.php'; ?>
                    <?php include 'Editor-Partials/Create-element/texts.php'; ?>
                    <?php include 'Editor-Partials/Create-element/dimensions.php'; ?>
                    <?php include 'Editor-Partials/Create-element/graphics.php'; ?>
                </div>
                <div class="export-options shrink_when_menu_hidden">
                    <div class="menu-header hide_when_menu_hidden">
                        <div class="columnHeader">Export options</div>
                    </div>
                    <div class="exports hide_when_menu_hidden">
                        <div class="exportBox control card" id="exportAsIframe">
                            <div class="card-header">
                                Iframe
                            </div>
                        </div>
                        <div class="exportBox control card" id="exportAsSeperateCSS">
                            <div class="card-header">
                                Export files with seperate CSS document
                            </div>
                        </div>
                        <div class="exportBox control card" id="exportAsInlineCSS">
                            <div class="card-header">
                                Export files with inline CSS
                            </div>
                        </div>
                        <div class="exportBox control card" id="exportAsIframe">
                            <div class="card-header">
                                PNG Image
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="element-list inactive shrink_when_menu_hidden">
            <div class="banner-elements shrink_when_menu_hidden">
                <div class="menu-toolbar">
                    <div class="close"></div>
                </div>
                <div class="menu-header hide_when_menu_hidden">
                    <div class="columnHeader">Active elements</div>
                    <div class="back"></div>
                </div>
                <div class="banner-element-holder hide_when_menu_hidden">
                </div>
            </div>
        </div>
    </div>
    <div class="right-menu shrink_when_menu_hidden">
        <div class="banner-edit-element shrink_when_menu_hidden">
            <div class="edits">
                <div class="menu-toolbar">
                    <div class="close"></div>
                </div>
                <div class="menu-header hide_when_menu_hidden">
                    <div class="columnHeader">Edit element</div>
                </div>
                <div id="accordionEdit" class="hide_when_menu_hidden">
                    <?php include 'Editor-Partials/Edit-element/texts.php'; ?>
                    <?php include 'Editor-Partials/Edit-element/graphics.php'; ?>
                    <?php include 'Editor-Partials/Edit-element/animations.php'; ?>
                </div>
            </div>
        </div>
    </div>

    <div id="banner" class="banner" style="position: relative;">
        <div class="grid"></div>
    </div>
    <?php include 'Editor-Partials/Export/exportbox.php'; ?>
</body>

</html>