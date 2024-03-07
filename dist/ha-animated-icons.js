 var icons = {
   "suzuki":[0,0,24,24,"M 16.474,18.663 A 23.953,23.953 0 0 0 12,22 L 2.087,15.087 c 0,0 4.17,-3.095 7.655,-0.724 L 14.417,17.6 14.987,17.223 2.088,8.1 A 25.568,25.568 0 0 0 7.525,5.338 24.025,24.025 0 0 0 12,2 l 9.913,6.913 c 0,0 -4.17,3.1 -7.656,0.725 L 9.583,6.4 9.014,6.778 l 12.9,9.121 a 25.531,25.531 0 0 0 -5.44,2.764 z"],
}

async function getIcon(name) {
  if (!(name in icons)) {
    console.log(`Icon "${name}" not available`);
    return '';
  }

  var svgDef = icons[name];
  var primaryPath = svgDef[4];
  return {
    path: primaryPath,
    viewBox: svgDef[0] + " " + svgDef[1] + " " + svgDef[2] + " " + svgDef[3]
  }

}

async function getIconList() {
  return Object.entries(icons).map(([icon]) => ({
    name: icon
  }));
}

window.customIconsets = window.customIconsets || {};
window.customIconsets["ani"] = getIcon;

window.customIcons = window.customIcons || {};
window.customIcons["ani"] = { getIcon, getIconList };
