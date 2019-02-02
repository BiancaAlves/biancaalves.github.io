$(function(){
	// Função que preenche ou apaga nomes dos arquivos
	function fileNames(newInputID){
		var input, fileName, files, name, newInput, newInputParent;	
		// Botão remover input
		newInput = $("#" + newInputID);
		newInputParent = newInput.closest('.js-file-group');

		// Nome do arquivo
	    fileName = newInputParent.find('.js-file-name');
	    if(!newInput.prop("files").length) {
	    	fileName.text('');
	    } else {
			name = newInput.val().split('\\').pop();
			fileName.text('');
			fileName.text(name);
		}
	}

	// Gera o HTML do novo input file
	function newAppendInput(id, idNumber){
		return '<div class="file-group js-file-group">' +
					'<div class="input-group">' +
						'<label class="file-button" for="' + id + '">' +
							'<div class="choose-file">Escolher Arquivo</div>' +
							'<span class="file-name js-file-name"></span>' +
						'</label>' +
						'<input type="file" name="' + id + '" id="' + id + '" data-id="' + idNumber + '" class="input-file js-input-file form-control">' +
					'</div>' +
					'<div class="js-remove-input remove-input btn btn-gray">- Remover</div>' +
				'</div>';
	}

	// Botão que adiciona novos inputs file
	var inputFileGroup, lastFileGroup, lastId, id, append;

	$('.js-new-file').each(function(){
		$(this).on('click', function(){
			inputFileGroup = $(this).closest('.js-form-group');
			lastFileGroup = inputFileGroup.children('.js-file-group').last();
			lastId  = lastFileGroup.find('.js-input-file').attr('id');
			lastIdNumber  = parseInt(lastFileGroup.find('.js-input-file').data('id'));
			idNumber = lastIdNumber;
			idNumber++;
			id = lastId.replace('-' + lastIdNumber, '-' + idNumber);
			append = newAppendInput(id, idNumber);
			inputFileGroup.append(append);
			restartRemoves();
			$('#' + id).on('change', function(){
				fileNames(id);
			});
		});
	});

	// Ativando captura de nomes dos arquivos
	$('.js-input-file').each(function(){
		$(this).on('change', function(){
			fileNames($(this).attr('id'));
		});
	});

	// Fim dos scripts de input file
});	