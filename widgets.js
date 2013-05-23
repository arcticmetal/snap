/*

DialogBoxMorph.prototype.promptUsernamePassword = function (
    title,
    defaultUsername,
    defaultPassword,
    world,
    pic
) {
    var usr = new InputFieldMorph(defaultUsername),
        pwd = new InputFieldMorph(defaultPassword),
        bdy = new AlignmentMorph('column', this.padding);

    bdy.setColor(this.color);
    usr.setWidth(200);
    pwd.setWidth(200);
    pwd.contents().text.toggleIsPassword();
    bdy.add(usr);
    bdy.add(pwd);
    bdy.fixLayout();

    this.labelString = title;
    this.createLabel();
    if (pic) {this.setPicture(pic); }

    this.addBody(bdy);

    usr.drawNew();
    pwd.drawNew();
    bdy.fixLayout();

    this.addButton('ok', 'OK');
    this.addButton('cancel', 'Cancel');
    this.fixLayout();
    this.drawNew();
    this.fixLayout();

    this.edit = function () {
        usr.edit();
    };

    this.getInput = function () {
        return {
            username: usr.getValue(),
            password: pwd.getValue()
        };
    };

    if (world) {
        world.add(this);
        this.setCenter(world.center());
        this.edit();
    }
};
