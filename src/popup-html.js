const popupHtml =
  '<style> @import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"); .popup { position: fixed; z-index: 999; left: 0; top: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.4); display: block; font-family: "Montserrat", sans-serif; } .popup-content { background-color: #ffffff; margin: auto; padding: 20px; border: 1px solid #888; width: 80%; max-width: 500px; border-radius: 20px; } .popup-buttons { margin-top: 5px; display: flex; flex-direction: column; align-items: start; gap: 5px; } .popup-button { margin-right: 5px; padding: 8px 10px; background-color: #f1f1f1; cursor: pointer; text-align: start; border-style: solid; border-color: #949494; border-width: 1px; border-radius: 6px; width: 100%; transition: all; transition-duration: 200ms; } .popup-button:hover { background-color: #949494; scale: 1.05; } #popup-input { margin-top: 10px; width: 100%; padding: 5px; border-width: 1px; border-style: solid; border-radius: 6px 0 0 6px; border-color: #949494; box-sizing: border-box; } #popup-submit { border-width: 1px; border-style: solid; } #popup-textarea { resize: none; width: 100%; height: auto; min-height: 200px; max-height: 500px; padding: 15px; margin: 20% 0% 20% 0% auto; box-sizing: border-box; border-style: solid; border-radius: 12px; background-color: #d9d9d9; } .popup-input-container { display: none; } .popup-submit { margin-top: 10px; padding: 5px 10px; border: none; background-color: #4caf50; color: white; cursor: pointer; border-style: solid; border-radius: 0 10px 10px 0; border-color: #949494; } .popup-submit:hover { background-color: #45a049; } .popup-cancel { margin-bottom: 10px; margin-left: 93%; font-size: 16px; padding: 4px 8px; border-width: 2px; border-radius: 180px; border-color: red; color: red; background-color: white; font-weight: bold; cursor: pointer; transition: all; transition-duration: 200ms; } .popup-cancel:hover { background-color: red; color: white; } .popup-reply { color: #f33769; font-weight: bold; margin-top: 15px; margin-right: 5px; padding: 5px 10px; border: #f33769 solid 2px; cursor: pointer; text-align: start; border-radius: 10px; width: 30%; text-align: center; transition: all; transition-duration: 200ms; } .popup-reply:hover { background-color: #f33769; color: white; } .popup-title2 { font-size: 24px; font-weight: bold; text-transform: uppercase; color: #f33769; margin: 10 10 4 10; padding: 0.25rem 0; border: none; } textarea:focus { outline: 0; border: gray; border-width: 1px; }</style><div id="popup" class="popup"> <div class="popup-content"> <button id="popup-cancel" class="popup-cancel">X</button> <textarea id="popup-textarea" placeholder="Reply"></textarea> <p class="popup-title2">Choices :</p> <div class="popup-buttons"> <button class="popup-button" id="btn-1"></button> <button class="popup-button" id="btn-2"></button> <button class="popup-button" id="btn-3"></button> <button class="popup-button" id="btn-4"></button> <button class="popup-button">Other ...</button> </div> <div class="popup-input-container"> <input type="text" id="popup-input" placeholder="Enter your choice" /> <button id="popup-submit" class="popup-submit">✓</button> </div> <button id="popup-reply" class="popup-reply">Reply</button> </div></div><script> const textarea = document.getElementById("popup-textarea"); textarea.addEventListener("input", () => { textarea.style.height = "auto"; textarea.style.height = textarea.scrollHeight + "px"; });</script><script> const replyPlaceholder = document.getElementById("popup-textarea"); const ellipsis = " ..."; let index = 0; const timeoutID = setInterval(() => { if (index < ellipsis.length) { replyPlaceholder.placeholder = `Reply${ellipsis.slice(0, index + 1)}`; index++; } else { index = 0; } if (replyPlaceholder.value.length !== 0) { clearTimeout(timeoutID); } }, 300);</script><script> const Other = document.getElementsByClassName("popup-buttons")[0].lastElementChild; const OtherTextInput = document.getElementsByClassName( "popup-input-container" )[0]; Other.addEventListener("click", () => { OtherTextInput.style.display = "flex"; });</script>';

export default popupHtml;
