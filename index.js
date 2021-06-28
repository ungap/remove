[Element, CharacterData, DocumentType].forEach(
  function (Class) {
    if (!('remove' in Class.prototype))
      Class.prototype.remove = this;
  },
  function remove() {
    if (this.parentNode)
      this.parentNode.removeChild(this);
  }
);
