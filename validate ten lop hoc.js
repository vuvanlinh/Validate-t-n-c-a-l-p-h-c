let className = prompt("Nhap ten lop de xac thuc: ")
function isClassname(str) {
    regexp = /^[CAP][0-9]{4}[GHIKLM]$/
    if (regexp.test(str)){
        alert("Day la ten lop cua CODEGYM")
    }else alert('Day khong la ten lop cua CODEGYM')
}
isClassname(className);