const GObject = imports.gi.GObject;
const Gtk = imports.gi.Gtk;

function init(){

}

function buildPrefsWidget(){
    let widget = new PrefsWidget();
    widget.show_all();
    return widget;

}

const PrefsWidget = new GObject.Class({
    Name : "Prefs.Widget",
    GTypeName : "PrefsWidget",
    Extends : Gtk.Box,

    _init : function(params){
        this.parent(params);
        this.margin = 20;
        this.set_spacing(15);
        this.set_orientation(Gtk.Orientation.VERTICAL);

        let timeLabel = new Gtk.Label({
            label : "Time between rotations (seconds)"
        });

        let spinButton = new Gtk.SpinButton();
        spinButton.set_sensitive(true);
        spinButton.set_range(1,86400);
        spinButton.set_value(120);
        spinButton.set_increments(1, 2);

        spinButton.connect("value-changed",function(w){
            log(w.get_value_as_int());
        });

        let hBox = new Gtk.Box();
        hBox.set_orientation(Gtk.Orientation.HORIZONTAL);

        hBox.pack_start(timeLabel, false, false, 0);
        hBox.pack_end(spinButton, false, false, 0);

        this.add(hBox);

        let entryLabel = new Gtk.Label({
            label : "Wallpaper Folder"
        });

        let entryButton = new Gtk.Entry();
        entryButton.set_text("Pictures/Wallpapers");
        entryButton.connect("changed",function(w){
            log(w.get_value_as_str());
        });

        let hEBox = new Gtk.Box();
        hEBox.set_orientation(Gtk.Orientation.HORIZONTAL);

        hEBox.pack_start(entryLabel, false, false, 0);
        hEBox.pack_end(entryButton, false, false, 0);

        this.add(hEBox);
    }
});