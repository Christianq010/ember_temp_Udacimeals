import Ember from 'ember';

export default Ember.Component.extend({
    orderManager: Ember.inject.service('order-service'),
    actions: {
        setDayTo(day){
            this.get('orderManager').setSelectedDayTo(day);
        },
        remove(day, menuCategory){
            this.get('orderManager').removeMenuOption(day, menuCategory);
        }
    }
});
