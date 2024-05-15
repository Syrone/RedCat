import GraphTabs from 'graph-tabs';

const dataTabs = document.querySelectorAll('[data-tabs]')

dataTabs?.forEach((attr) => {
	const value = attr.getAttribute('data-tabs');
  new GraphTabs(value);
})