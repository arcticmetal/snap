/*
        'connect...',
        'initializeCloud'
    );
    if (SnapCloud.api.saveProject) {
        menu.addItem(
            'save project to cloud...',
            function () {
                if (myself.projectName) {
                    myself.saveProjectToCloud(myself.projectName);
                } else {
                    myself.prompt('Save Project As...', function (name) {
                        myself.saveProjectToCloud(name);
                    });
                }
            }
        );
    }
    if (shiftClicked) {
        'Dynamic input labels',
        'toggleDynamicInputLabels',
        SyntaxElementMorph.prototype.dynamicInputLabels,
        'uncheck to disable dynamic\nlabels for variadic inputs',
        'check to enable dynamic\nlabels for variadic inputs'
    );
    addPreference(

IDE_Morph.prototype.toggleDynamicInputLabels = function () {
    var projectData;
    SyntaxElementMorph.prototype.dynamicInputLabels =
        !SyntaxElementMorph.prototype.dynamicInputLabels;
    if (Process.prototype.isCatchingErrors) {
        try {
            projectData = this.serializer.serialize(this.stage);
        } catch (err) {
            this.showMessage('Serialization failed: ' + err);
        }
    } else {
        projectData = this.serializer.serialize(this.stage);
    }
    SpriteMorph.prototype.initBlocks();
    this.spriteBar.tabBar.tabTo('scripts');
    this.createCategories();
    this.createCorralBar();
    this.openProjectString(projectData);
};

        'bozo',
        'password',
        world,

/*
IDE_Morph.prototype.initializeCloud = function () {
    var myself = this,
        world = this.world();
    new DialogBoxMorph(
        null,
        function (url) {
            SnapCloud.login(
                url,
                'bozo',
                'password',
                function () {myself.showMessage('now connected.', 2); },
                myself.cloudError()
            );
        }
    ).prompt(
        'Initialize Cloud Connection',
        SnapCloud.url,
        world,
        myself.cloudIcon()
    );
};
*/

    var myself = this;
            SnapCloud.disconnect();
            myself.showMessage('disconnected.', 2);
        },
            SnapCloud.disconnect();
            myself.showMessage('disconnected.', 2);
        }
    );
    var myself = this;
            if (projectList.length > 0) {
                myself.openCloudProjectBrowser(projectList);
            } else {

IDE_Morph.prototype.openCloudProjectBrowser = function (projectList) {
    var dialog = new DialogBoxMorph(),
        myself = this,
        projects = projectList || [],
        deleted = {},
        padding = 6,
        deletedColor = new Color(190, 190, 190),
        list,
        preview,
        notesFrame,
        notesText,
        body,
        world = this.world();
    dialog.labelString = 'Browse Projects';
    dialog.createLabel();
    projects.sort(function (a, b) {
        return a.ProjectName > b.ProjectName ? 0 : -1;
    });

    list = new ListMorph(
        projects,
        function (element) {return element.ProjectName; }
    );
    list.action = function (element) {

        var notes,
            thumbnail;

        notes = element.Notes || ' ';
        thumbnail = element.Thumbnail;
        if (notes) {
            notesText.text = notes;
            notesText.drawNew();
            notesFrame.contents.adjustBounds();
        }
        if (thumbnail) {
            preview.texture = thumbnail;
            preview.cachedTexture = null;
            preview.drawNew();
        }

    };
    list.setExtent(new Point(150, 250));
    list.contents.children[0].maxWidth = function () {
        return list.width() - padding * 2;
    };
    list.contents.children[0].drawNew();
    list.contents.children[0].children.forEach(function (item) {
        item.pressColor = dialog.titleBarColor.darker(20);
        item.color = new Color(0, 0, 0, 0);
        item.noticesTransparentClick = true;
        item.createBackgrounds();
    });
    list.padding = padding;
    list.fixLayout = nop;
    list.edge = InputFieldMorph.prototype.edge;
    list.fontSize = InputFieldMorph.prototype.fontSize;
    list.typeInPadding = InputFieldMorph.prototype.typeInPadding;
    list.contrast = InputFieldMorph.prototype.contrast;
    list.drawNew = InputFieldMorph.prototype.drawNew;
    list.drawRectBorder = InputFieldMorph.prototype.drawRectBorder;

    preview = new Morph();
    preview.fixLayout = nop;
    preview.edge = InputFieldMorph.prototype.edge;
    preview.fontSize = InputFieldMorph.prototype.fontSize;
    preview.typeInPadding = InputFieldMorph.prototype.typeInPadding;
    preview.contrast = InputFieldMorph.prototype.contrast;
    preview.drawNew = function () {
        InputFieldMorph.prototype.drawNew.call(this);
        if (this.texture) {
            this.drawTexture(this.texture);
        }
    };
    preview.drawCachedTexture = function () {
        var context = this.image.getContext('2d');
        context.drawImage(this.cachedTexture, this.edge, this.edge);
        this.changed();
    };
    preview.drawRectBorder = InputFieldMorph.prototype.drawRectBorder;
    preview.setExtent(this.serializer.thumbnailSize.add(preview.edge * 2));

    notesFrame = new ScrollFrameMorph();
    notesFrame.padding = padding;
    notesFrame.fixLayout = nop;

    notesFrame.edge = InputFieldMorph.prototype.edge;
    notesFrame.fontSize = InputFieldMorph.prototype.fontSize;
    notesFrame.typeInPadding = InputFieldMorph.prototype.typeInPadding;
    notesFrame.contrast = InputFieldMorph.prototype.contrast;
    notesFrame.drawNew = InputFieldMorph.prototype.drawNew;
    notesFrame.drawRectBorder = InputFieldMorph.prototype.drawRectBorder;

    notesFrame.acceptsDrops = false;
    notesFrame.contents.acceptsDrops = false;
    notesText = new TextMorph('');
    notesText.setWidth(preview.width() - notesFrame.padding * 2);
    notesText.setPosition(notesFrame.topLeft().add(padding));
    notesFrame.addContents(notesText);

    body = new Morph();
    body.setColor(dialog.color);
    body.setExtent(new Point(
        list.width() + preview.width() + padding * 2,
        list.height()
    ));
    body.add(list);
    body.add(preview);
    body.add(notesFrame);
    preview.drawNew();
    notesFrame.setExtent(new Point(
        preview.width(),
        body.height() - preview.height() - padding
    ));
    list.setPosition(body.topLeft());
    preview.setPosition(list.topRight().add(new Point(padding, 0)));
    notesFrame.setPosition(preview.bottomLeft().add(new Point(0, padding)));

    dialog.addBody(body);
    list.drawNew();

    dialog.addButton('open', 'Open');
    dialog.open = function () {
        if (!list.selected || deleted[list.selected.ProjectName]) {
            return;
        }
        SnapCloud.callURL(
            list.selected.URL,
            function (resultList) {
                myself.droppedText(resultList[0].SourceCode);
            },
            myself.cloudError()
        );
        this.destroy();
    };

    dialog.addButton('deleteProject', 'Delete');
    dialog.deleteProject = function () {
        if (!list.selected || deleted[list.selected.ProjectName]) {
            return;
        }
        myself.confirm(
            localize(
                'Are you sure you want to delete'
            ) + '\n"' + list.selected.ProjectName + '"?',
            'Delete Project',
            function () {
                var item, extent;
                SnapCloud.callURL(
                    list.selected.DeleteURL,
                    function () {
                        deleted[list.selected.ProjectName] = true;
                        item = detect(
                            list.listContents.children,
                            function (child) {
                                return child.labelString ===
                                    list.selected.ProjectName;
                            }
                        );
                        if (item) {
                            extent = item.extent();
                            item.labelColor = deletedColor;
                            item.createLabel();
                            item.silentSetExtent(extent);
                        }
                        list.action(list.selected);

                    },
                    myself.cloudError()
                );
            }
        );
    };

    dialog.addButton('cancel', 'Cancel');

    dialog.fixLayout();
    dialog.drawNew();
    world.add(dialog);
    dialog.setCenter(world.center());
    list.contents.children[0].color = new Color(0, 0, 0, 0);
    MenuMorph.uber.drawNew.call(list.contents.children[0]);
    list.contents.children[0].setPosition(
        list.contents.topLeft().add(padding)
    );
};
