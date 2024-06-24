import Choices from 'choices.js'

const selectsLarge = document.querySelectorAll('.js-choices--lg')
const selectInverses = document.querySelectorAll('.js-choices-inverse')

const selectLargeConfig = {
	allowHTML: true,
	placeholder: true,
	searchEnabled: false,
	shouldSort: false,
	itemSelectText: '',
	classNames: {
		containerOuter: 'choices choices--lg'
	},
	callbackOnCreateTemplates: function(template) {
    return {
			item: ({ classNames }, data) => {
        return template(`
          <div class="${classNames.item} ${
          data.highlighted
            ? classNames.highlightedState
            : classNames.itemSelectable
        } ${
          data.placeholder ? classNames.placeholder : ''
        }" data-item data-id="${data.id}" data-value="${data.value}" ${
          data.active ? 'aria-selected="true"' : ''
        } ${data.disabled ? 'aria-disabled="true"' : ''}>
            <span class="choices__item-value">${data.label}</span>
						<span class="icon">
							<svg>
								<use xlink:href="img/icons/arrow-down.svg#svg-arrow-down"></use>
							</svg>
						</span>
          </div>
        `);
      },
    };
  }
}

const selectInverseConfig = {
	allowHTML: true,
	placeholder: true,
	searchEnabled: false,
	shouldSort: false,
	itemSelectText: '',
	classNames: {
		containerOuter: 'choices choices--inverse'
	},
	callbackOnCreateTemplates: function(template) {
    return {
			item: ({ classNames }, data) => {
        return template(`
          <div class="${classNames.item} ${
          data.highlighted
            ? classNames.highlightedState
            : classNames.itemSelectable
        } ${
          data.placeholder ? classNames.placeholder : ''
        }" data-item data-id="${data.id}" data-value="${data.value}" ${
          data.active ? 'aria-selected="true"' : ''
        } ${data.disabled ? 'aria-disabled="true"' : ''}>
            <span class="choices__item-value">${data.label}</span>
						<span class="icon">
							<svg>
								<use xlink:href="img/icons/arrow-down.svg#svg-arrow-down"></use>
							</svg>
						</span>
          </div>
        `);
      },
    };
  }
}

selectsLarge?.forEach((select) => {
  new Choices(select, selectLargeConfig)
})
selectInverses?.forEach((select) => {
  new Choices(select, selectInverseConfig)
})