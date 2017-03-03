changeValueBy("self-controller", 30);

function changeValueBy(attributeName, valueChanged) {
    var attribute = document.getElementById(attributeName);
    var progress_bar = attribute.children[1].children[0];
    var span = attribute.children[1].children[0].children[0];

    var value0 = parseInt(span.innerHTML);

    span.innerHTML = value0 + valueChanged;
    progress_bar.style.width = span.innerHTML + "%";
    progress_bar.style.width = span.innerHTML + "%";
}
