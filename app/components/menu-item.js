import Ember from 'ember';

export default Ember.Component.extend({
    orderManager: Ember.inject.service('order-service'),
    classNames: ['menu-item', 'col-md-4'],
    mealCategory: 'breakfast',
    actions: {
        changeCategory(category){
            this.set('mealCategory', category);
        },
        chooseItem(menuItemName){
            this.get('orderManager').chooseMenuOption(this.get('mealCategory'), menuItemName);
        }
    }
});
