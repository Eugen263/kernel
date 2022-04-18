import { Linear } from "../server/linear/Linear.js";

class RightBox_class {
    render(props) {
        Linear.div({class: 'right_box', id: 'right_box'}, {place: '.root'});
        Linear.div({class: 'profile_info_box'}, {place: '#right_box'});

        //profile head info
        Linear.div({class: 'pr_inf_header'}, {place: '.profile_info_box'});
        Linear.div({class: 'inf_btn_back_box'}, {place: '.pr_inf_header'});
        Linear.div({id: 'back_box_ico'}, {place: '.inf_btn_back_box'});
        Linear.i({class: 'fas fa-arrow-left'}, {place: '#back_box_ico'});
        Linear.div({class: 'pr_inf_text', text: 'Profile'}, {place: '.pr_inf_header'});
        Linear.div({class: 'inf_btn_edit'}, {place: '.pr_inf_header'});
        Linear.div({class: 'edit_bnt_ico'}, {place: '.inf_btn_edit'});
        Linear.i({class: 'fas fa-pencil-alt'}, {place: '.edit_bnt_ico'});

        //info body
        Linear.div({class: 'pr_inf_body'}, {place: '.profile_info_box'});

        //info body logo
        Linear.div({class: 'inf_body_logo', style: 'background-image: url(\'../public/img/logo3.jpg\');'}, {place: '.pr_inf_body'});
        Linear.div({class: 'pr_inf_logo_gradient'}, {place: '.inf_body_logo'});
        Linear.div({class: 'inf_body_head'}, {place: '.pr_inf_logo_gradient'});
        Linear.div({class: 'inf_body_username', text: 'Marusia Churai'}, {place: '.inf_body_head'});
        Linear.div({class: 'inf_body_login', text: 'last seen 20 minutes ago'}, {place: '.inf_body_head'});

        //
        Linear.div({class: 'pr_inf_extra'}, {place: '.pr_inf_body'});
        Linear.div({class: 'extra_username', text: '@ut2n_'}, {place: '.pr_inf_extra'});
        Linear.div({class: 'extra_notif'}, {place: '.pr_inf_extra'});
        Linear.div({class: 'extar_notif_ico'}, {place: '.extra_notif'});
        Linear.i({class: 'far fa-bell'}, {place: '.extar_notif_ico'});
        Linear.div({class: 'extra_notif_text', text: 'Notification'}, {place: '.extra_notif'});
        Linear.label({class: 'switch extra_notif_switch'}, {place: '.extra_notif'});
        Linear.input({type: 'checkbox', checked: true}, {place: '.extra_notif_switch'});
        Linear.span({class: 'slider round'}, {place: '.extra_notif_switch'});

        Linear.div({class: 'inf_underline'}, {place: '.pr_inf_body'});
    }
}

export var RightBox = new RightBox_class();