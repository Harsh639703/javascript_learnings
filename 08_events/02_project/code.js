const insert = document.getElementById('insert')

window.addEventListener('keydown',(e)=>{
  insert.innerHTML = `
  <div class="color">

  <table style="border:1px solid">
<tr style="border:1px solid">
<th style="border:1px solid">Key</th>
<th style="border:1px solid">Keycode</th>
<th style="border:1px solid">Code</th>
</tr>
<tr>
<td style="border:1px solid">${e.key === " "?"space":e.key}</td>
<td style="border:1px solid">${e.keyCode}</td>
<td style="border:1px solid">${e.code}</td>
</tr>

</table>

  </div>
  `
})