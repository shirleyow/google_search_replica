function checkSubmit(e) {
  // cannot name function submit()
  if (e && e.keyCode == 13) {
    document.forms[0].submit();
  }
}