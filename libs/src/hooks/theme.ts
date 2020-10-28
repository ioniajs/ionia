const CSSContent: string = `
  a {
    color: var(--primary-color) !important;
  }
  a:hover {
    color: var(--primary-hover-color) !important;
  }
  a:active {
    color: var(--primary-active-color) !important;
  }
  ::-moz-selection {
    background: var(--primary-color) !important;
  }
  ::selection {
    background: var(--primary-color) !important;
  }
  html {
    --antd-wave-shadow-color: var(--primary-color) !important;
  }
  [ant-click-animating-without-extra-node='true']::after,
  .ant-click-animating-node {
    -webkit-box-shadow: 0 0 0 0 var(--primary-color) !important;
            box-shadow: 0 0 0 0 var(--primary-color) !important;
    -webkit-box-shadow: 0 0 0 0 var(--antd-wave-shadow-color) !important;
            box-shadow: 0 0 0 0 var(--antd-wave-shadow-color) !important;
  }
  @-webkit-keyframes waveEffect {
    100% {
      -webkit-box-shadow: 0 0 0 var(--primary-color) !important;
              box-shadow: 0 0 0 var(--primary-color) !important;
      -webkit-box-shadow: 0 0 0 6px var(--antd-wave-shadow-color) !important;
              box-shadow: 0 0 0 6px var(--antd-wave-shadow-color) !important;
    }
  }
  @keyframes waveEffect {
    100% {
      -webkit-box-shadow: 0 0 0 var(--primary-color) !important;
              box-shadow: 0 0 0 var(--primary-color) !important;
      -webkit-box-shadow: 0 0 0 6px var(--antd-wave-shadow-color) !important;
              box-shadow: 0 0 0 6px var(--antd-wave-shadow-color) !important;
    }
  }
  .ant-alert-info .ant-alert-icon {
    color: var(--primary-color) !important;
  }
  .ant-anchor-ink-ball {
    border: 2px solid var(--primary-color) !important;
  }
  .ant-anchor-link-active > .ant-anchor-link-title {
    color: var(--primary-color) !important;
  }
  .ant-select-auto-complete.ant-select .ant-input:focus,
  .ant-select-auto-complete.ant-select .ant-input:hover {
    border-color: var(--primary-hover-color) !important;
  }
  .ant-select-selection:hover {
    border-color: var(--primary-hover-color) !important;
  }
  .ant-select-focused .ant-select-selection,
  .ant-select-selection:focus,
  .ant-select-selection:active {
    border-color: var(--primary-hover-color) !important;
    -webkit-box-shadow: 0 0 0 2px var(--primary-shadow-color) !important;
            box-shadow: 0 0 0 2px var(--primary-shadow-color) !important;
  }
  .ant-select-open .ant-select-selection {
    border-color: var(--primary-hover-color) !important;
    -webkit-box-shadow: 0 0 0 2px var(--primary-shadow-color) !important;
            box-shadow: 0 0 0 2px var(--primary-shadow-color) !important;
  }
  .ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item-selected .ant-select-selected-icon,
  .ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item-selected:hover .ant-select-selected-icon {
    color: var(--primary-color) !important;
  }
  .ant-select-dropdown-menu-item:hover:not(.ant-select-dropdown-menu-item-disabled) {
    background-color: var(--primary-shadow-color) !important;
  }
  .ant-select-dropdown-menu-item-active:not(.ant-select-dropdown-menu-item-disabled) {
    background-color: var(--primary-shadow-color) !important;
  }
  .ant-input:hover {
    border-color: var(--primary-hover-color) !important;
  }
  .ant-input:focus {
    border-color: var(--primary-hover-color) !important;
  }
  .ant-input:focus, .ant-input-focused {
    box-shadow: 0 0 0 2px var(--primary-shadow-color) !important;
  }
  .ant-input-group-addon .ant-select-open .ant-select-selection,
  .ant-input-group-addon .ant-select-focused .ant-select-selection {
    color: var(--primary-color) !important;
  }
  .ant-input-affix-wrapper:hover {
    border-color: var(--primary-hover-color) !important;
  }
  .ant-input-affix-wrapper:hover .ant-input:not(.ant-input-disabled) {
    border-color: var(--primary-hover-color) !important;
  }
  .ant-input-affix-wrapper:focus, .ant-input-affix-wrapper-focused {
    border-color: var(--primary-hover-color) !important;
    box-shadow: 0 0 0 2px var(--primary-shadow-color) !important;
  }
  .ant-btn:hover,
  .ant-btn:focus {
    color: var(--primary-hover-color) !important;
    border-color: var(--primary-hover-color) !important;
  }
  .ant-btn:active,
  .ant-btn.active {
    border-color: var(--primary-active-color) !important;
  }
  .ant-btn-primary {
    background-color: var(--primary-color) !important;
    border-color: var(--primary-color) !important;
  }
  .ant-btn-primary:hover,
  .ant-btn-primary:focus {
    color: #fff;
    background-color: var(--primary-hover-color) !important;
    border-color: var(--primary-hover-color) !important;
  }
  .ant-btn-primary:active,
  .ant-btn-primary.active {
    background-color: var(--primary-active-color) !important;
    border-color: var(--primary-active-color) !important;
  }
  .ant-btn-danger:hover, .ant-btn-danger:focus {
    color: #fff;
    background-color: #ff7875;
    border-color: #ff7875;
  }
  .ant-btn-dangerous:hover, .ant-btn-dangerous:focus {
    color: #ff7875;
    border-color: #ff7875;
  }
  .ant-btn-group .ant-btn-primary:not(:first-child):not(:last-child) {
    border-right-color: var(--primary-hover-color) !important;
    border-left-color: var(--primary-hover-color) !important;
  }
  .ant-btn-group .ant-btn-primary:first-child:not(:last-child) {
    border-right-color: var(--primary-hover-color) !important;
  }
  .ant-btn-group .ant-btn-primary:last-child:not(:first-child),
  .ant-btn-group .ant-btn-primary + .ant-btn-primary {
    border-left-color: var(--primary-hover-color) !important;
  }
  .ant-btn-ghost:hover,
  .ant-btn-ghost:focus {
    color: var(--primary-hover-color) !important;
    border-color: var(--primary-hover-color) !important;
  }
  .ant-btn-ghost:active,
  .ant-btn-ghost.active {
    color: var(--primary-active-color) !important;
    border-color: var(--primary-active-color) !important;
  }
  .ant-btn-dashed:hover,
  .ant-btn-dashed:focus {
    color: var(--primary-hover-color) !important;
    border-color: var(--primary-hover-color) !important;
  }
  .ant-btn-dashed:active,
  .ant-btn-dashed.active {
    color: var(--primary-active-color) !important;
    border-color: var(--primary-active-color) !important;
  }
  .ant-btn-link {
    color: var(--primary-color) !important;
  }
  .ant-btn-link:hover,
  .ant-btn-link:focus {
    color: var(--primary-hover-color) !important;
    border-color: transparent;
  }
  .ant-btn-link:active,
  .ant-btn-link.active {
    color: var(--primary-active-color) !important;
    border-color: transparent;
  }
  .ant-btn-background-ghost.ant-btn-primary {
    color: var(--primary-color) !important;
    border-color: var(--primary-color) !important;
  }
  .ant-btn-background-ghost.ant-btn-primary:hover,
  .ant-btn-background-ghost.ant-btn-primary:focus {
    color: var(--primary-hover-color) !important;
    border-color: var(--primary-hover-color) !important;
  }
  .ant-btn-background-ghost.ant-btn-primary:active,
  .ant-btn-background-ghost.ant-btn-primary.active {
    color: var(--primary-active-color) !important;
    border-color: var(--primary-active-color) !important;
  }
  .ant-btn-background-ghost.ant-btn-link {
    color: var(--primary-color) !important;
  }
  .ant-btn-background-ghost.ant-btn-link:hover,
  .ant-btn-background-ghost.ant-btn-link:focus {
    color: var(--primary-hover-color) !important;
  }
  .ant-btn-background-ghost.ant-btn-link:active,
  .ant-btn-background-ghost.ant-btn-link.active {
    color: var(--primary-active-color) !important;
  }
  .ant-badge-status-processing {
    background-color: var(--primary-color) !important;
  }
  .ant-badge-status-processing::after {
    border: 1px solid var(--primary-color) !important;
  }
  .ant-badge-status-blue {
    background: var(--primary-color) !important;
  }
  .ant-breadcrumb a:hover {
    color: var(--primary-hover-color) !important;
  }
  .ant-menu-item > a:hover {
    color: var(--primary-color) !important;
  }
  .ant-menu-item:hover,
  .ant-menu-item-active,
  .ant-menu:not(.ant-menu-inline) .ant-menu-submenu-open,
  .ant-menu-submenu-active,
  .ant-menu-submenu-title:hover {
    color: var(--primary-color) !important;
  }
  .ant-menu-item-selected {
    color: var(--primary-color) !important;
  }
  .ant-menu-item-selected > a,
  .ant-menu-item-selected > a:hover {
    color: var(--primary-color) !important;
  }
  .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    background-color: var(--primary-shadow-color) !important;
  }
  .ant-menu-submenu-vertical > .ant-menu-submenu-title:hover .ant-menu-submenu-arrow::after,
  .ant-menu-submenu-vertical-left > .ant-menu-submenu-title:hover .ant-menu-submenu-arrow::after,
  .ant-menu-submenu-vertical-right > .ant-menu-submenu-title:hover .ant-menu-submenu-arrow::after,
  .ant-menu-submenu-inline > .ant-menu-submenu-title:hover .ant-menu-submenu-arrow::after,
  .ant-menu-submenu-vertical > .ant-menu-submenu-title:hover .ant-menu-submenu-arrow::before,
  .ant-menu-submenu-vertical-left > .ant-menu-submenu-title:hover .ant-menu-submenu-arrow::before,
  .ant-menu-submenu-vertical-right > .ant-menu-submenu-title:hover .ant-menu-submenu-arrow::before,
  .ant-menu-submenu-inline > .ant-menu-submenu-title:hover .ant-menu-submenu-arrow::before {
    background: -webkit-gradient(linear, left top, right top, from(var(--primary-color) !important), to(var(--primary-color) !important));
    background: -webkit-linear-gradient(left, var(--primary-color) !important, var(--primary-color) !important);
    background: linear-gradient(to right, var(--primary-color) !important, var(--primary-color) !important);
  }
  .ant-menu-vertical .ant-menu-submenu-selected,
  .ant-menu-vertical-left .ant-menu-submenu-selected,
  .ant-menu-vertical-right .ant-menu-submenu-selected {
    color: var(--primary-color) !important;
  }
  .ant-menu-vertical .ant-menu-submenu-selected > a,
  .ant-menu-vertical-left .ant-menu-submenu-selected > a,
  .ant-menu-vertical-right .ant-menu-submenu-selected > a {
    color: var(--primary-color) !important;
  }
  .ant-menu-horizontal > .ant-menu-item:hover,
  .ant-menu-horizontal > .ant-menu-submenu:hover,
  .ant-menu-horizontal > .ant-menu-item-active,
  .ant-menu-horizontal > .ant-menu-submenu-active,
  .ant-menu-horizontal > .ant-menu-item-open,
  .ant-menu-horizontal > .ant-menu-submenu-open,
  .ant-menu-horizontal > .ant-menu-item-selected,
  .ant-menu-horizontal > .ant-menu-submenu-selected {
    color: var(--primary-color) !important;
    border-bottom: 2px solid var(--primary-color) !important;
  }
  .ant-menu-horizontal > .ant-menu-item > a:hover {
    color: var(--primary-color) !important;
  }
  .ant-menu-horizontal > .ant-menu-item-selected > a {
    color: var(--primary-color) !important;
  }
  .ant-menu-vertical .ant-menu-item::after,
  .ant-menu-vertical-left .ant-menu-item::after,
  .ant-menu-vertical-right .ant-menu-item::after,
  .ant-menu-inline .ant-menu-item::after {
    border-right: 3px solid var(--primary-color) !important;
  }
  .ant-menu.ant-menu-dark .ant-menu-item-selected,
  .ant-menu-submenu-popup.ant-menu-dark .ant-menu-item-selected {
    background-color: var(--primary-color) !important;
  }
  .ant-menu-dark.ant-menu-dark:not(.ant-menu-horizontal) .ant-menu-item-selected {
    background-color: var(--primary-color) !important;
  }
  .ant-dropdown-menu-item-selected,
  .ant-dropdown-menu-submenu-title-selected,
  .ant-dropdown-menu-item-selected > a,
  .ant-dropdown-menu-submenu-title-selected > a {
    color: var(--primary-color) !important;
    background-color: var(--primary-shadow-color) !important;
  }
  .ant-dropdown-menu-item:hover,
  .ant-dropdown-menu-submenu-title:hover {
    background-color: var(--primary-shadow-color) !important;
  }
  .ant-dropdown-menu-dark .ant-dropdown-menu-item-selected,
  .ant-dropdown-menu-dark .ant-dropdown-menu-item-selected:hover,
  .ant-dropdown-menu-dark .ant-dropdown-menu-item-selected > a {
    background: var(--primary-color) !important;
  }
  .ant-fullcalendar-value:hover {
    background: var(--primary-shadow-color) !important;
  }
  .ant-fullcalendar-value:active {
    background: var(--primary-color) !important;
  }
  .ant-fullcalendar-today .ant-fullcalendar-value,
  .ant-fullcalendar-month-panel-current-cell .ant-fullcalendar-value {
    -webkit-box-shadow: 0 0 0 1px var(--primary-color) !important inset;
            box-shadow: 0 0 0 1px var(--primary-color) !important inset;
  }
  .ant-fullcalendar-fullscreen .ant-fullcalendar-month:hover,
  .ant-fullcalendar-fullscreen .ant-fullcalendar-date:hover {
    background: var(--primary-shadow-color) !important;
  }
  .ant-fullcalendar-fullscreen .ant-fullcalendar-month:active,
  .ant-fullcalendar-fullscreen .ant-fullcalendar-date:active {
    background: var(--primary-shadow-color) !important;
  }
  .ant-fullcalendar-fullscreen .ant-fullcalendar-month-panel-current-cell .ant-fullcalendar-month,
  .ant-fullcalendar-fullscreen .ant-fullcalendar-today .ant-fullcalendar-date {
    border-top-color: var(--primary-color) !important;
  }
  .ant-fullcalendar-fullscreen .ant-fullcalendar-month-panel-selected-cell .ant-fullcalendar-value,
  .ant-fullcalendar-fullscreen .ant-fullcalendar-selected-day .ant-fullcalendar-value {
    color: var(--primary-color) !important;
  }
  .ant-fullcalendar-fullscreen .ant-fullcalendar-month-panel-selected-cell .ant-fullcalendar-month,
  .ant-fullcalendar-fullscreen .ant-fullcalendar-selected-day .ant-fullcalendar-date {
    background: var(--primary-shadow-color) !important;
  }
  .ant-radio-wrapper:hover .ant-radio,
  .ant-radio:hover .ant-radio-inner,
  .ant-radio-input:focus + .ant-radio-inner {
    border-color: var(--primary-color) !important;
  }
  .ant-radio-checked::after {
    border: 1px solid var(--primary-color) !important;
  }
  .ant-radio-inner::after {
    background-color: var(--primary-color) !important;
  }
  .ant-radio-checked .ant-radio-inner {
    border-color: var(--primary-color) !important;
  }
  .ant-radio-button-wrapper:hover {
    color: var(--primary-color) !important;
  }
  .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled),
  .ant-radio-button-wrapper-checked {
    color: var(--primary-color) !important;
    border-color: var(--primary-color) !important;
    -webkit-box-shadow: -1px 0 0 0 var(--primary-color) !important;
            box-shadow: -1px 0 0 0 var(--primary-color) !important;
  }
  .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):hover {
    color: var(--primary-hover-color) !important;
    border-color: var(--primary-hover-color) !important;
    -webkit-box-shadow: -1px 0 0 0 var(--primary-hover-color) !important;
            box-shadow: -1px 0 0 0 var(--primary-hover-color) !important;
  }
  .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):first-child {
    border-color: var(--primary-color) !important;
  }
  .ant-radio-button-wrapper-checked::before {
    background-color: var(--primary-color) !important !important;
    opacity: 0.1;
  }
  .ant-radio-button-wrapper-checked:first-child {
    border-color: var(--primary-color) !important;
    -webkit-box-shadow: none !important;
            box-shadow: none !important;
  }
  .ant-radio-button-wrapper-checked:hover {
    color: var(--primary-hover-color) !important;
    border-color: var(--primary-hover-color) !important;
    -webkit-box-shadow: -1px 0 0 0 var(--primary-hover-color) !important;
            box-shadow: -1px 0 0 0 var(--primary-hover-color) !important;
  }
  .ant-radio-button-wrapper-checked:active {
    color: var(--primary-active-color) !important;
    border-color: var(--primary-active-color) !important;
    -webkit-box-shadow: -1px 0 0 0 var(--primary-active-color) !important;
            box-shadow: -1px 0 0 0 var(--primary-active-color) !important;
  }
  .ant-radio-button-wrapper-checked:focus-within {
    outline: 3px solid rgba(24, 144, 255, 0.06);
  }
  .ant-radio-group-solid .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {
    color: #fff;
    background: var(--primary-color) !important;
    border-color: var(--primary-color) !important;
  }
  .ant-radio-group-solid .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):hover {
    color: #fff;
    background: var(--primary-hover-color) !important;
    border-color: var(--primary-hover-color) !important;
  }
  .ant-radio-group-solid .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):active {
    color: #fff;
    background: var(--primary-active-color) !important;
    border-color: var(--primary-active-color) !important;
  }
  .ant-card-actions > li > span:hover {
    color: var(--primary-color) !important;
    -webkit-transition: color 0.3s;
    transition: color 0.3s;
  }
  .ant-card-actions > li > span a:hover {
    color: var(--primary-color) !important;
  }
  .ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab-active {
    color: var(--primary-color) !important;
  }
  .ant-tabs-extra-content .ant-tabs-new-tab:hover {
    color: var(--primary-color) !important;
    border-color: var(--primary-color) !important;
  }
  .ant-tabs .ant-tabs-card-bar.ant-tabs-bottom-bar .ant-tabs-tab-active {
    color: var(--primary-color) !important;
  }
  .ant-tabs-ink-bar {
    background-color: var(--primary-color) !important;
  }
  .ant-tabs-nav .ant-tabs-tab:hover {
    color: var(--primary-hover-color) !important;
  }
  .ant-tabs-nav .ant-tabs-tab:active {
    color: var(--primary-active-color) !important;
  }
  .ant-tabs-nav .ant-tabs-tab-active {
    color: var(--primary-color) !important;
  }
  .ant-cascader-picker:focus .ant-cascader-input {
    border-color: var(--primary-hover-color) !important;
    -webkit-box-shadow: 0 0 0 2px var(--primary-shadow-color) !important;
            box-shadow: 0 0 0 2px var(--primary-shadow-color) !important;
  }
  .ant-cascader-picker-label:hover + .ant-cascader-input {
    border-color: var(--primary-hover-color) !important;
  }
  .ant-cascader-menu-item:hover {
    background: var(--primary-shadow-color) !important;
  }
  .ant-checkbox-wrapper:hover .ant-checkbox-inner,
  .ant-checkbox:hover .ant-checkbox-inner,
  .ant-checkbox-input:focus + .ant-checkbox-inner {
    border-color: var(--primary-color) !important;
  }
  .ant-checkbox-checked::after {
    border: 1px solid var(--primary-color) !important;
  }
  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: var(--primary-color) !important;
    border-color: var(--primary-color) !important;
  }
  .ant-checkbox-indeterminate .ant-checkbox-inner::after {
    background-color: var(--primary-color) !important;
  }
  .ant-calendar-selected-day .ant-calendar-date {
    background: var(--primary-shadow-color) !important;
  }
  .ant-calendar-picker:hover .ant-calendar-picker-input:not(.ant-input-disabled) {
    border-color: var(--primary-color) !important;
  }
  .ant-calendar-picker:focus .ant-calendar-picker-input:not(.ant-input-disabled) {
    border-color: var(--primary-hover-color) !important;
    -webkit-box-shadow: 0 0 0 2px var(--primary-shadow-color) !important;
            box-shadow: 0 0 0 2px var(--primary-shadow-color) !important;
  }
  .ant-calendar-header a:hover {
    color: var(--primary-hover-color) !important;
  }
  .ant-calendar-date:hover {
    background: var(--primary-shadow-color) !important;
  }
  .ant-calendar-date:active {
    background: var(--primary-hover-color) !important;
  }
  .ant-calendar-today .ant-calendar-date {
    color: var(--primary-color) !important;
    border-color: var(--primary-color) !important;
  }
  .ant-calendar-range .ant-calendar-selected-start-date .ant-calendar-date,
  .ant-calendar-range .ant-calendar-selected-end-date .ant-calendar-date {
    background: var(--primary-color) !important;
  }
  .ant-calendar-range .ant-calendar-selected-start-date .ant-calendar-date:hover,
  .ant-calendar-range .ant-calendar-selected-end-date .ant-calendar-date:hover {
    background: var(--primary-hover-color) !important;
  }
  .ant-calendar-selected-date .ant-calendar-date,
  .ant-calendar-selected-start-date .ant-calendar-date,
  .ant-calendar-selected-end-date .ant-calendar-date {
    background: var(--primary-color) !important;
    color: #fff;
  }
  .ant-calendar-selected-date .ant-calendar-date:hover,
  .ant-calendar-selected-start-date .ant-calendar-date:hover,
  .ant-calendar-selected-end-date .ant-calendar-date:hover {
    background: var(--primary-color) !important;
    color: #fff;
  }
  .ant-calendar .ant-calendar-ok-btn {
    background-color: var(--primary-color) !important;
    border-color: var(--primary-color) !important;
  }
  .ant-calendar .ant-calendar-ok-btn:hover,
  .ant-calendar .ant-calendar-ok-btn:focus {
    background-color: var(--primary-hover-color) !important;
    border-color: var(--primary-hover-color) !important;
  }
  .ant-calendar .ant-calendar-ok-btn:active,
  .ant-calendar .ant-calendar-ok-btn.active {
    background-color: var(--primary-active-color) !important;
    border-color: var(--primary-active-color) !important;
  }
  .ant-calendar-range .ant-calendar-input:hover,
  .ant-calendar-range .ant-calendar-time-picker-input:hover {
    border-color: var(--primary-hover-color) !important;
  }
  .ant-calendar-range .ant-calendar-input:focus,
  .ant-calendar-range .ant-calendar-time-picker-input:focus {
    border-color: var(--primary-hover-color) !important;
    -webkit-box-shadow: 0 0 0 2px var(--primary-shadow-color) !important;
            box-shadow: 0 0 0 2px var(--primary-shadow-color) !important;
  }
  .ant-calendar-month-panel-header a:hover {
    color: var(--primary-hover-color) !important;
  }
  .ant-calendar-month-panel-selected-cell .ant-calendar-month-panel-month {
    background: var(--primary-color) !important;
  }
  .ant-calendar-month-panel-selected-cell .ant-calendar-month-panel-month:hover {
    background: var(--primary-color) !important;
  }
  .ant-calendar-year-panel-header a:hover {
    color: var(--primary-hover-color) !important;
  }
  .ant-calendar-year-panel-selected-cell .ant-calendar-year-panel-year {
    background: var(--primary-color) !important;
  }
  .ant-calendar-year-panel-selected-cell .ant-calendar-year-panel-year:hover {
    background: var(--primary-color) !important;
  }
  .ant-calendar-decade-panel-header a:hover {
    color: var(--primary-hover-color) !important;
  }
  .ant-calendar-decade-panel-selected-cell .ant-calendar-decade-panel-decade {
    background: var(--primary-color) !important;
  }
  .ant-calendar-decade-panel-selected-cell .ant-calendar-decade-panel-decade:hover {
    background: var(--primary-color) !important;
  }
  .ant-calendar-range .ant-calendar-in-range-cell::before {
    background: var(--primary-shadow-color) !important;
  }
  .ant-calendar-time-picker-select li:hover {
    background: var(--primary-shadow-color) !important;
  }
  .ant-calendar-month-panel-month:hover {
    background: var(--primary-shadow-color) !important;
  }
  .ant-calendar-year-panel-year:hover {
    background: var(--primary-shadow-color) !important;
  }
  .ant-calendar-decade-panel-decade:hover {
    background: var(--primary-shadow-color) !important;
  }
  .ant-calendar-week-number .ant-calendar-body tr:hover {
    background: var(--primary-shadow-color) !important;
  }
  .ant-calendar-week-number .ant-calendar-body tr.ant-calendar-active-week {
    background: var(--primary-shadow-color) !important;
  }
  .ant-time-picker-input:hover {
    border-color: var(--primary-hover-color) !important;
  }
  .ant-time-picker-input:focus {
    border-color: var(--primary-hover-color) !important;
    -webkit-box-shadow: 0 0 0 2px var(--primary-shadow-color) !important;
            box-shadow: 0 0 0 2px var(--primary-shadow-color) !important;
  }
  .ant-time-picker-panel-select li:hover {
    background: var(--primary-shadow-color) !important;
  }
  .ant-tag-checkable:not(.ant-tag-checkable-checked):hover {
    color: var(--primary-color) !important;
  }
  .ant-tag-checkable-checked {
    background-color: var(--primary-color) !important;
  }
  .ant-tag-checkable:active {
    background-color: var(--primary-active-color) !important;
  }
  .ant-transfer-list-content-item:not(.ant-transfer-list-content-item-disabled):hover {
    background-color: var(--primary-shadow-color) !important;
  }
  .has-error .ant-transfer-list-search:not([disabled]):hover {
    border-color: var(--primary-hover-color) !important;
    border-right-width: 1px !important;
  }
  .has-error .ant-transfer-list-search:not([disabled]):focus {
    border-color: var(--primary-hover-color) !important;
    -webkit-box-shadow: 0 0 0 2px var(--primary-shadow-color) !important;
            box-shadow: 0 0 0 2px var(--primary-shadow-color) !important;
  }
  .is-validating.has-feedback .ant-form-item-children-icon {
    color: var(--primary-color) !important;
  }
  .ant-input-number:hover {
    border-color: var(--primary-hover-color) !important;
  }
  .ant-input-number:focus {
    border-color: var(--primary-hover-color) !important;
    -webkit-box-shadow: 0 0 0 2px var(--primary-shadow-color) !important;
            box-shadow: 0 0 0 2px var(--primary-shadow-color) !important;
  }
  .ant-input-number-handler:hover .ant-input-number-handler-up-inner,
  .ant-input-number-handler:hover .ant-input-number-handler-down-inner {
    color: var(--primary-hover-color) !important;
  }
  .ant-input-number:hover {
    border-color: var(--primary-hover-color) !important;
    border-right-width: 1px !important;
  }
  .ant-input-number-focused {
    border-color: var(--primary-hover-color) !important;
    -webkit-box-shadow: 0 0 0 2px var(--primary-shadow-color) !important;
            box-shadow: 0 0 0 2px var(--primary-shadow-color) !important;
  }
  .ant-list-item-meta-title > a:hover {
    color: var(--primary-color) !important;
  }
  .ant-spin {
    color: var(--primary-color) !important;
  }
  .ant-spin-dot-item {
    background-color: var(--primary-color) !important;
  }
  .ant-pagination-item:focus,
  .ant-pagination-item:hover {
    border-color: var(--primary-color) !important;
  }
  .ant-pagination-item:focus a,
  .ant-pagination-item:hover a {
    color: var(--primary-color) !important;
  }
  .ant-pagination-item-active {
    border-color: var(--primary-color) !important;
  }
  .ant-pagination-item-active a {
    color: var(--primary-color) !important;
  }
  .ant-pagination-item-active:focus,
  .ant-pagination-item-active:hover {
    border-color: var(--primary-hover-color) !important;
  }
  .ant-pagination-item-active:focus a,
  .ant-pagination-item-active:hover a {
    color: var(--primary-hover-color) !important;
  }
  .ant-pagination-jump-prev .ant-pagination-item-container .ant-pagination-item-link-icon,
  .ant-pagination-jump-next .ant-pagination-item-container .ant-pagination-item-link-icon {
    color: var(--primary-color) !important;
  }
  .ant-pagination-prev:hover a,
  .ant-pagination-next:hover a {
    border-color: var(--primary-hover-color) !important;
  }
  .ant-pagination-prev:focus .ant-pagination-item-link,
  .ant-pagination-next:focus .ant-pagination-item-link,
  .ant-pagination-prev:hover .ant-pagination-item-link,
  .ant-pagination-next:hover .ant-pagination-item-link {
    color: var(--primary-color) !important;
    border-color: var(--primary-color) !important;
  }
  .ant-pagination-options-quick-jumper input:hover {
    border-color: var(--primary-hover-color) !important;
  }
  .ant-pagination-options-quick-jumper input:focus {
    border-color: var(--primary-hover-color) !important;
    -webkit-box-shadow: 0 0 0 2px var(--primary-shadow-color) !important;
            box-shadow: 0 0 0 2px var(--primary-shadow-color) !important;
  }
  .ant-pagination-simple .ant-pagination-simple-pager input:hover {
    border-color: var(--primary-color) !important;
  }
  .ant-mention-wrapper .ant-mention-editor:hover {
    border-color: var(--primary-hover-color) !important;
  }
  .ant-mention-wrapper .ant-mention-editor:focus {
    border-color: var(--primary-hover-color) !important;
    -webkit-box-shadow: 0 0 0 2px var(--primary-shadow-color) !important;
            box-shadow: 0 0 0 2px var(--primary-shadow-color) !important;
  }
  .ant-mention-wrapper.ant-mention-active:not(.disabled) .ant-mention-editor {
    border-color: var(--primary-hover-color) !important;
    -webkit-box-shadow: 0 0 0 2px var(--primary-shadow-color) !important;
            box-shadow: 0 0 0 2px var(--primary-shadow-color) !important;
  }
  .ant-mention-dropdown-notfound.ant-mention-dropdown-item .anticon-loading {
    color: var(--primary-color) !important;
  }
  .ant-mentions:hover {
    border-color: var(--primary-hover-color) !important;
  }
  .ant-mentions:focus {
    border-color: var(--primary-hover-color) !important;
    -webkit-box-shadow: 0 0 0 2px var(--primary-shadow-color) !important;
            box-shadow: 0 0 0 2px var(--primary-shadow-color) !important;
  }
  .ant-mentions-focused {
    border-color: var(--primary-hover-color) !important;
    -webkit-box-shadow: 0 0 0 2px var(--primary-shadow-color) !important;
            box-shadow: 0 0 0 2px var(--primary-shadow-color) !important;
  }
  .ant-mention-dropdown-item:hover {
    background-color: var(--primary-shadow-color) !important;
  }
  .ant-mention-dropdown-item.focus,
  .ant-mention-dropdown-item-active {
    background-color: var(--primary-shadow-color) !important;
  }
  .ant-mentions-dropdown-menu-item:hover {
    background-color: var(--primary-shadow-color) !important;
  }
  .ant-mentions-dropdown-menu-item-active {
    background-color: var(--primary-shadow-color) !important;
  }
  .ant-message-info .anticon,
  .ant-message-loading .anticon {
    color: var(--primary-color) !important;
  }
  .ant-modal-confirm-info .ant-modal-confirm-body > .anticon {
    color: var(--primary-color) !important;
  }
  .anticon.ant-notification-notice-icon-info {
    color: var(--primary-color) !important;
  }
  .ant-page-header-back-button {
    color: var(--primary-color) !important;
  }
  .ant-page-header-back-button:focus,
  .ant-page-header-back-button:hover {
    color: var(--primary-hover-color) !important;
  }
  .ant-page-header-back-button:active {
    color: var(--primary-active-color) !important;
  }
  .ant-progress-circle-path {
    stroke: var(--primary-color) !important;
  }
  .ant-progress-success-bg,
  .ant-progress-bg {
    background-color: var(--primary-color) !important;
  }
  .ant-slider {
    width: 100%;
  }
  .ant-slider-track {
    background-color: var(--primary-hover-color) !important;
  }
  .ant-slider-handle {
    border: solid 2px var(--primary-hover-color) !important;
  }
  .ant-slider-handle:focus {
    border-color: var(--primary-hover-color) !important;
    box-shadow: 0 0 0 5px var(--primary-shadow-color) !important;
    outline: none;
  }
  .ant-slider-handle.ant-tooltip-open {
    border-color: var(--primary-color) !important;
  }
  .ant-slider:hover .ant-slider-track {
    background-color: var(--primary-hover-color) !important;
  }
  .ant-slider:hover .ant-slider-handle:not(.ant-tooltip-open) {
    border-color: var(--primary-hover-color) !important;
  }
  .ant-slider-dot-active {
    border-color: var(--primary-active-color) !important;
  }
  .ant-steps-item-icon > .ant-steps-icon {
    color: var(--primary-color) !important;
  }
  .ant-steps-item-process .ant-steps-item-icon {
    background-color: #fff;
    border-color: var(--primary-color) !important;
  }
  .ant-steps-item-process .ant-steps-item-icon > .ant-steps-icon .ant-steps-icon-dot {
    background: var(--primary-color) !important;
  }
  .ant-steps-item-process .ant-steps-item-icon {
    background: var(--primary-color) !important;
  }
  .ant-steps-item-finish .ant-steps-item-icon {
    border-color: var(--primary-color) !important;
  }
  .ant-steps-item-finish .ant-steps-item-icon > .ant-steps-icon {
    color: var(--primary-color) !important;
  }
  .ant-steps-item-finish .ant-steps-item-icon > .ant-steps-icon .ant-steps-icon-dot {
    background: var(--primary-color) !important;
  }
  .ant-steps-item-finish > .ant-steps-item-content > .ant-steps-item-title::after {
    background-color: var(--primary-color) !important;
  }
  .ant-steps-item-finish > .ant-steps-item-tail::after {
    background-color: var(--primary-color) !important;
  }
  .ant-steps-item[role='button']:not(.ant-steps-item-process):hover .ant-steps-item-title,
  .ant-steps-item[role='button']:not(.ant-steps-item-process):hover .ant-steps-item-description {
    color: var(--primary-color) !important;
  }
  .ant-steps-item[role='button']:not(.ant-steps-item-process):hover .ant-steps-item-icon {
    border-color: var(--primary-color) !important;
  }
  .ant-steps-item[role='button']:not(.ant-steps-item-process):hover .ant-steps-item-icon .ant-steps-icon {
    color: var(--primary-color) !important;
  }
  .ant-steps-item-custom.ant-steps-item-process .ant-steps-item-icon > .ant-steps-icon {
    color: var(--primary-color) !important;
  }
  .ant-switch-checked.ant-switch-loading .ant-switch-loading-icon {
    color: var(--primary-color) !important;
  }
  .ant-switch-checked {
    background-color: var(--primary-color) !important;
  }
  .ant-table-thead > tr > th .ant-table-filter-selected.anticon-filter {
    color: var(--primary-color) !important;
  }
  .ant-table-thead > tr > th .ant-table-column-sorter .ant-table-column-sorter-inner .ant-table-column-sorter-up.on,
  .ant-table-thead > tr > th .ant-table-column-sorter .ant-table-column-sorter-inner .ant-table-column-sorter-down.on {
    color: var(--primary-color) !important;
  }
  .ant-table-filter-dropdown .ant-dropdown-menu .ant-dropdown-submenu-contain-selected .ant-dropdown-menu-submenu-title::after {
    color: var(--primary-color) !important;
  }
  .ant-table-filter-dropdown-link {
    color: var(--primary-color) !important;
  }
  .ant-table-filter-dropdown-link:hover {
    color: var(--primary-hover-color) !important;
  }
  .ant-table-filter-dropdown-link:active {
    color: var(--primary-active-color) !important;
  }
  .ant-table-thead > tr.ant-table-row-hover:not(.ant-table-expanded-row):not(.ant-table-row-selected) > td,
  .ant-table-tbody > tr.ant-table-row-hover:not(.ant-table-expanded-row):not(.ant-table-row-selected) > td,
  .ant-table-thead > tr:hover:not(.ant-table-expanded-row):not(.ant-table-row-selected) > td,
  .ant-table-tbody > tr:hover:not(.ant-table-expanded-row):not(.ant-table-row-selected) > td {
    background: var(--primary-shadow-color) !important;
  }
  .ant-table-row-expand-icon:focus, .ant-table-row-expand-icon:hover {
    color: var(--primary-hover-color) !important;
  }
  .ant-timeline-item-head-blue {
    color: var(--primary-color) !important;
    border-color: var(--primary-color) !important;
  }
  .ant-select-tree-checkbox-wrapper:hover .ant-select-tree-checkbox-inner,
  .ant-select-tree-checkbox:hover .ant-select-tree-checkbox-inner,
  .ant-select-tree-checkbox-input:focus + .ant-select-tree-checkbox-inner {
    border-color: var(--primary-color) !important;
  }
  .ant-select-tree-checkbox-checked::after {
    border: 1px solid var(--primary-color) !important;
  }
  .ant-select-tree-checkbox-checked .ant-select-tree-checkbox-inner {
    background-color: var(--primary-color) !important;
    border-color: var(--primary-color) !important;
  }
  .ant-select-tree-checkbox-indeterminate .ant-select-tree-checkbox-inner::after {
    background-color: var(--primary-color) !important;
  }
  .ant-select-tree li span.ant-select-icon_loading .ant-select-switcher-loading-icon {
    color: var(--primary-color) !important;
  }
  .ant-select-tree li span.ant-select-tree-switcher.ant-select-tree-switcher_open .ant-select-switcher-loading-icon,
  .ant-select-tree li span.ant-select-tree-switcher.ant-select-tree-switcher_close .ant-select-switcher-loading-icon {
    color: var(--primary-color) !important;
  }
  .ant-select-tree li .ant-select-tree-node-content-wrapper:hover {
    background-color: var(--primary-shadow-color) !important;
  }
  .ant-select-tree li .ant-select-tree-node-content-wrapper.ant-select-tree-node-selected {
    background-color: var(--primary-shadow-color) !important;
  }
  .ant-tree.ant-tree-directory > li.ant-tree-treenode-selected > span.ant-tree-checkbox .ant-tree-checkbox-inner,
  .ant-tree.ant-tree-directory .ant-tree-child-tree > li.ant-tree-treenode-selected > span.ant-tree-checkbox .ant-tree-checkbox-inner {
    border-color: var(--primary-color) !important;
  }
  .ant-tree.ant-tree-directory > li.ant-tree-treenode-selected > span.ant-tree-checkbox.ant-tree-checkbox-checked .ant-tree-checkbox-inner::after,
  .ant-tree.ant-tree-directory .ant-tree-child-tree > li.ant-tree-treenode-selected > span.ant-tree-checkbox.ant-tree-checkbox-checked .ant-tree-checkbox-inner::after {
    border-color: var(--primary-color) !important;
  }
  .ant-tree.ant-tree-directory > li.ant-tree-treenode-selected > span.ant-tree-node-content-wrapper::before,
  .ant-tree.ant-tree-directory .ant-tree-child-tree > li.ant-tree-treenode-selected > span.ant-tree-node-content-wrapper::before {
    background: var(--primary-color) !important;
  }
  .ant-tree-checkbox-wrapper:hover .ant-tree-checkbox-inner,
  .ant-tree-checkbox:hover .ant-tree-checkbox-inner,
  .ant-tree-checkbox-input:focus + .ant-tree-checkbox-inner {
    border-color: var(--primary-color) !important;
  }
  .ant-tree-checkbox-checked::after {
    border: 1px solid var(--primary-color) !important;
  }
  .ant-tree-checkbox-checked .ant-tree-checkbox-inner {
    background-color: var(--primary-color) !important;
    border-color: var(--primary-color) !important;
  }
  .ant-tree-checkbox-indeterminate .ant-tree-checkbox-inner::after {
    background-color: var(--primary-color) !important;
  }
  .ant-tree li.drag-over > span[draggable] {
    background-color: var(--primary-color) !important;
  }
  .ant-tree li.drag-over-gap-top > span[draggable] {
    border-top-color: var(--primary-color) !important;
  }
  .ant-tree li.drag-over-gap-bottom > span[draggable] {
    border-bottom-color: var(--primary-color) !important;
  }
  .ant-tree li.ant-tree-treenode-loading span.ant-tree-switcher.ant-tree-switcher_open .ant-tree-switcher-loading-icon,
  .ant-tree li.ant-tree-treenode-loading span.ant-tree-switcher.ant-tree-switcher_close .ant-tree-switcher-loading-icon {
    color: var(--primary-color) !important;
  }
  .ant-tree.ant-tree-directory > li span.ant-tree-node-content-wrapper:hover::before,
  .ant-tree.ant-tree-directory .ant-tree-child-tree > li span.ant-tree-node-content-wrapper:hover::before {
    background: var(--primary-shadow-color) !important;
  }
  .ant-tree li .ant-tree-node-content-wrapper:hover {
    background-color: var(--primary-shadow-color) !important;
  }
  .ant-tree li .ant-tree-node-content-wrapper.ant-tree-node-selected {
    background-color: var(--primary-shadow-color) !important;
  }
  .ant-typography a {
    color: var(--primary-color) !important;
  }
  .ant-typography a:focus,
  .ant-typography a:hover {
    color: var(--primary-hover-color) !important;
  }
  .ant-typography a:active {
    color: var(--primary-active-color) !important;
  }
  .ant-typography-expand,
  .ant-typography-edit,
  .ant-typography-copy {
    color: var(--primary-color) !important;
  }
  .ant-typography-expand:focus,
  .ant-typography-edit:focus,
  .ant-typography-copy:focus,
  .ant-typography-expand:hover,
  .ant-typography-edit:hover,
  .ant-typography-copy:hover {
    color: var(--primary-hover-color) !important;
  }
  .ant-typography-expand:active,
  .ant-typography-edit:active,
  .ant-typography-copy:active {
    color: var(--primary-active-color) !important;
  }
  .ant-upload.ant-upload-select-picture-card:hover {
    border-color: var(--primary-color) !important;
  }
  .ant-upload.ant-upload-drag.ant-upload-drag-hover:not(.ant-upload-disabled) {
    border-color: var(--primary-active-color) !important;
  }
  .ant-upload.ant-upload-drag:not(.ant-upload-disabled):hover {
    border-color: var(--primary-hover-color) !important;
  }
  .ant-upload.ant-upload-drag p.ant-upload-drag-icon .anticon {
    color: var(--primary-hover-color) !important;
  }
`;

export { CSSContent };
