webpackJsonp(["main"],{

/***/ "../../../../../src lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-song-text-display></app-song-text-display>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__song_text_display_song_text_display_component__ = __webpack_require__("../../../../../src/app/song-text-display/song-text-display.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_playnotes_service__ = __webpack_require__("../../../../../src/app/services/playnotes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_load_music_xml_service__ = __webpack_require__("../../../../../src/app/services/load-music-xml.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//components


//services



var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__song_text_display_song_text_display_component__["a" /* SongTextDisplayComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__services_playnotes_service__["a" /* PlayNotesService */],
            __WEBPACK_IMPORTED_MODULE_7__services_load_music_xml_service__["a" /* LoadMusicXmlService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/datamodels/single-note.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleNote; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SingleNote = (function () {
    function SingleNote() {
    }
    return SingleNote;
}());
SingleNote = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], SingleNote);

;
//# sourceMappingURL=single-note.js.map

/***/ }),

/***/ "../../../../../src/app/datamodels/xml-song.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return XmlSong; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var XmlSong = (function () {
    function XmlSong(title, author, xml) {
        this.title = title;
        this.author = author;
        this.xml = xml;
    }
    return XmlSong;
}());
XmlSong = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [Object, Object, Object])
], XmlSong);

//# sourceMappingURL=xml-song.js.map

/***/ }),

/***/ "../../../../../src/app/services/load-music-xml.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadMusicXmlService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__datamodels_xml_song__ = __webpack_require__("../../../../../src/app/datamodels/xml-song.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_custom_event_handler__ = __webpack_require__("../../../../../src/app/shared/custom-event-handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jquery__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//datamodels

//shared


var LoadMusicXmlService = (function (_super) {
    __extends(LoadMusicXmlService, _super);
    function LoadMusicXmlService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        /* set valid events in the CustomEventHandler */
        //TODO: move hardcoded event strings to config file or class
        _this.setEvents(['song loaded']);
        _this.arrayOfSongs = [];
        _this.songsUrl = 'assets/music/';
        return _this;
    }
    LoadMusicXmlService.prototype.getSong = function (title, author) {
        return this.arrayOfSongs.filter(function (element) {
            return (element.title == title && element.author == author);
        });
    };
    LoadMusicXmlService.prototype.loadSong = function (fileName, callback) {
        var _this = this;
        this.http.get(this.songsUrl + fileName + '.xml')
            .toPromise()
            .then(function (response) {
            var body = response.text();
            var xmlSongDom = __WEBPACK_IMPORTED_MODULE_5_jquery__["parseXML"](body);
            var xmlCredits = xmlSongDom.getElementsByTagName('credit');
            var lastCreditIndex = xmlCredits.length - 1;
            var xmlSong;
            /*if (xmlCredits.length > 0) {
                //TODO: Check for nulls
                xmlSong = new XmlSong
                (	xmlCredits[0].textContent as string,
                    xmlCredits[lastCreditIndex].textContent as string,
                    body
                );
            } else {
                xmlSong = new XmlSong('unknown', 'unknown', body);
            }*/
            xmlSong = new __WEBPACK_IMPORTED_MODULE_3__datamodels_xml_song__["a" /* XmlSong */]('moon', 'bet', body);
            _this.arrayOfSongs.push(xmlSong);
            //console.log(this.arrayOfSongs);
            callback(xmlSong);
            _this.emitEvent('song loaded');
        });
    };
    return LoadMusicXmlService;
}(__WEBPACK_IMPORTED_MODULE_4__shared_custom_event_handler__["a" /* CustomEventHandler */]));
LoadMusicXmlService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], LoadMusicXmlService);

var _a;
//# sourceMappingURL=load-music-xml.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/playnotes.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayNotesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_tone__ = __webpack_require__("../../../../tone/build/Tone.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_tone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_tone__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlayNotesService = (function () {
    function PlayNotesService() {
        var numberOfTones = 6;
        this.synth = new __WEBPACK_IMPORTED_MODULE_1_tone__["PolySynth"](numberOfTones, __WEBPACK_IMPORTED_MODULE_1_tone__["Synth"]).toMaster(); //Look into dependency injection here
    }
    PlayNotesService.prototype.playTone = function (note, duration) {
        this.synth.triggerAttackRelease(note, duration);
    };
    PlayNotesService.prototype.pressTone = function (note) {
        this.synth.triggerAttack(note);
    };
    PlayNotesService.prototype.releaseTone = function (note) {
        this.synth.triggerRelease(note);
    };
    return PlayNotesService;
}());
PlayNotesService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], PlayNotesService);

//# sourceMappingURL=playnotes.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/custom-event-handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomEventHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*
extend this class to add custom events to a class
*/
var CustomEventHandler = (function () {
    function CustomEventHandler() {
    }
    CustomEventHandler.prototype.setEvents = function (validEventNames) {
        var _this = this;
        /* Sets valid events that can be emitted or registered to */
        this.events = {};
        validEventNames.map(function (eventName) {
            _this.events[eventName] = [];
        });
    };
    CustomEventHandler.prototype.registerCallback = function (eventName, callbackToRegister) {
        /* registers callbacks that will be called when eventName is fired*/
        if (typeof this.events[eventName] !== 'undefined') {
            this.events[eventName].push(callbackToRegister);
        }
        else {
            this.events[eventName] = [callbackToRegister];
        }
    };
    CustomEventHandler.prototype.emitEvent = function (eventName, eventData) {
        /* Call all events that are registered to eventName */
        if (this.events[eventName]) {
            if (typeof eventData === 'undefined') {
                this.events[eventName].map(function (callback) {
                    callback();
                });
            }
            else {
                this.events[eventName].map(function (callback) {
                    callback(eventData);
                });
            }
        }
    };
    return CustomEventHandler;
}());
CustomEventHandler = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], CustomEventHandler);

//# sourceMappingURL=custom-event-handler.js.map

/***/ }),

/***/ "../../../../../src/app/song-text-display/song-text-display.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".translatedKey{\n\tdisplay: inline-block;\n\twidth:5%;\n}\n\n.translatedKeyBox{\n\twidth:50%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/song-text-display/song-text-display.component.html":
/***/ (function(module, exports) {

module.exports = "<select [(ngModel)]=\"selectedSongName\" (change)=\"selectSong()\">\n\t<option *ngFor=\"let\tsongName of songNames\" value=\"{{songName}}\">\n\t\t{{songName}}\n\t</option>\n</select>\n<div class=\"translatedKeyBox\">\n\t<div class=\"translatedKey\" *ngFor=\"let note of parsedSong\">\n\t\t{{note.translatedKey}}\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/song-text-display/song-text-display.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SongTextDisplayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_playnotes_service__ = __webpack_require__("../../../../../src/app/services/playnotes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_load_music_xml_service__ = __webpack_require__("../../../../../src/app/services/load-music-xml.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__datamodels_single_note__ = __webpack_require__("../../../../../src/app/datamodels/single-note.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//services



/*TODO: modularize this class*/
var SongTextDisplayComponent = (function () {
    function SongTextDisplayComponent(playNotesService, loadMusicXml) {
        this.playNotesService = playNotesService;
        this.loadMusicXml = loadMusicXml;
        this.songNames = ['amazing grace', 'Sonata No 1 Movement 1', 'moon light sonata', 'ill be there', 'jingle bells', 'yankee doodle', 'twinkle twinkle', 'happy birthday', 'fur elise', 'haru haru', 'bts save me', 'kum bah ya', 'its you'];
        this.selectedSongName = this.songNames[0];
    }
    SongTextDisplayComponent.prototype.generateKeyToNoteMap = function (noteToSetToLetter, letterToSetToNote) {
        /*
            pick a note that a letter will be mapped to.
            The rest of the mappings will be generated
        */
        var keyboardOrder = 'qwertyuiopasdfghjkl;\'zxcvbnm,./';
        var noteOrder = ["C0", "D0", "E0", "F0", "G0", "A0", "B0",
            "C1", "D1", "E1", "F1", "G1", "A1", "B1",
            "C2", "D2", "E2", "F2", "G2", "A2", "B2",
            "C3", "D3", "E3", "F3", "G3", "A3", "B3",
            "C4", "D4", "E4", "F4", "G4", "A4", "B4",
            "C5", "D5", "E5", "F5", "G5", "A5", "B5",
            "C6", "D6", "E6", "F6", "G6", "A6", "B6",
            "C7", "D7", "E7", "F7", "G7", "A7", "B7",
            "C8", "D8", "E8", "F8", "G8", "A8", "B8",
            "C9", "D9", "E9", "F9", "G9", "A9", "B9"];
        var noteIndex = noteOrder.indexOf(noteToSetToLetter);
        var letterIndex = keyboardOrder.search(letterToSetToNote);
        var noteLetterDifference = noteIndex - letterIndex;
        var outputMap = {};
        var currentLetter;
        var currentNote;
        for (var i = 0; i < keyboardOrder.length; i++) {
            currentLetter = keyboardOrder[i];
            currentNote = noteOrder[(i + noteLetterDifference) % noteOrder.length];
            outputMap[currentLetter] = currentNote;
            outputMap[currentNote] = currentLetter;
        }
        return outputMap;
    };
    SongTextDisplayComponent.prototype.displayKeyToNoteMap = function (keyToNotemap) {
        var keyboardOrder = 'qwertyuiopasdfghjkl;\'zxcvbnm,./'.split('');
        var output = '';
        keyboardOrder.map(function (key) {
            output += key + ': ' + keyToNotemap[key] + '\n';
        });
        return output;
    };
    SongTextDisplayComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.keyToNoteMap = this.generateKeyToNoteMap('C4', 'g');
        console.log(this.keyToNoteMap);
        this.selectSong();
        setTimeout(function () { console.log(_this.selectedSongName); }, 10000);
    };
    SongTextDisplayComponent.prototype.selectSong = function () {
        var _this = this;
        this.loadMusicXml.loadSong(this.selectedSongName, function (xmlSong) {
            _this.xmlSong = xmlSong;
            _this.parsedSong = _this.parseSong(xmlSong);
            _this.parsedSong = _this.parsedSong.filter(function (note) { return note.backup == 0; });
        });
    };
    /*TODO: move all parsing to external class*/
    SongTextDisplayComponent.prototype.parseSong = function (xmlSong) {
        var xmlSongDom = $.parseXML(xmlSong ? xmlSong.xml : this.xmlSong.xml);
        var measures = xmlSongDom.getElementsByTagName('measure');
        var outputNotes = [];
        for (var i = 0; i < measures.length; i++) {
            this.parseMeasure(measures[i], Object(outputNotes));
        }
        this.translateSongNotesToKeys(outputNotes);
        return outputNotes;
    };
    SongTextDisplayComponent.prototype.parseMeasure = function (measure, arrayToAddNotesTo) {
        //TODO: look into unmarshalling this xml
        var divisionsNode = measure.getElementsByTagName('divisions');
        var divisions;
        divisions = divisionsNode.length > 0 ? parseInt(divisionsNode[0].textContent) : null;
        var noteNodes = measure.childNodes;
        var nodeName;
        var backup = 0;
        for (var i = 0; i < noteNodes.length; i++) {
            nodeName = noteNodes[i].nodeName;
            if (nodeName === 'note') {
                this.parseNote(noteNodes[i], backup, Object(arrayToAddNotesTo));
            }
            else if (nodeName === 'backup') {
                backup += parseInt(noteNodes[i].textContent);
            }
        }
    };
    SongTextDisplayComponent.prototype.parseNote = function (note, divisionsToBackup, arrayToAddNotesTo) {
        var pitchElements = note.getElementsByTagName('pitch');
        var restElements = note.getElementsByTagName('rest');
        var durationElements = note.getElementsByTagName('duration');
        var duration = durationElements.length > 0 ? parseInt(durationElements[0].textContent) : null;
        var pitch = 'rest';
        var parsedNote = new __WEBPACK_IMPORTED_MODULE_3__datamodels_single_note__["a" /* SingleNote */]();
        if (pitchElements.length > 0) {
            pitch = pitchElements[0].getElementsByTagName('step')[0].textContent;
            pitch += pitchElements[0].getElementsByTagName('octave')[0].textContent;
            pitch = pitch.replace(/\s/g, '');
        }
        else if (restElements.length > 0) {
            pitch = 'RE';
        }
        parsedNote.note = pitch;
        parsedNote.duration = duration;
        parsedNote.backup = divisionsToBackup;
        arrayToAddNotesTo.push(parsedNote);
    };
    SongTextDisplayComponent.prototype.translateSongNotesToKeys = function (songNotes) {
        var _this = this;
        songNotes.map(function (note) {
            note.translatedKey = _this.keyToNoteMap[note.note];
        });
    };
    SongTextDisplayComponent.prototype.playSong = function (songNotes) {
        songNotes = songNotes ? songNotes : this.parsedSong;
        console.log('playing song');
        songNotes.map(function (note) {
            //this.notes
        });
    };
    SongTextDisplayComponent.prototype.handleKeyUp = function (event) {
        if (!event.repeat) {
            this.playNotesService.pressTone(this.keyToNoteMap[event.key]);
        }
    };
    SongTextDisplayComponent.prototype.handleKeyDown = function (event) {
        this.playNotesService.releaseTone(this.keyToNoteMap[event.key]);
    };
    return SongTextDisplayComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('document:keydown', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SongTextDisplayComponent.prototype, "handleKeyUp", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('document:keyup', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SongTextDisplayComponent.prototype, "handleKeyDown", null);
SongTextDisplayComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-song-text-display',
        template: __webpack_require__("../../../../../src/app/song-text-display/song-text-display.component.html"),
        styles: [__webpack_require__("../../../../../src/app/song-text-display/song-text-display.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_playnotes_service__["a" /* PlayNotesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_playnotes_service__["a" /* PlayNotesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_load_music_xml_service__["a" /* LoadMusicXmlService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_load_music_xml_service__["a" /* LoadMusicXmlService */]) === "function" && _b || Object])
], SongTextDisplayComponent);

var _a, _b;
//# sourceMappingURL=song-text-display.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map