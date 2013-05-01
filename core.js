"use strict";

var save = "save@hashare"
var load = "load@hashare"

function plugin(CodeMirror) {
  CodeMirror.defineOption("hashare", false, function(editor, value) {
    /**
    Takes editor and enables persists changes to the buffer across the sessions.
    **/
    if (value) {
      var saving = false
      editor[save] = function(event) {
        location.hash = encodeURIComponent(editor.getValue())
      }
      editor[load] = function() {
        var value = decodeURIComponent(window.location.hash.substr(1))
        if (value && value !== editor.getValue()) editor.setValue(value)
      }
      window.addEventListener("blur", editor[save], false)
      window.addEventListener("hashchange", editor[load], false)

      editor[load]()
    } else {
      window.removeEventListener("blur", editor[save], false)
      window.removeEventListener("blur", editor[load], false)
    }
  })
}

module.exports = plugin
