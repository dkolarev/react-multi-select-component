import { css } from "goober";
import React from "react";

import { ISelectProps } from "../lib/interfaces";
import SelectPanel from "../select-panel";
import Dropdown from "./dropdown";
import DropdownHeader from "./header";

const MultiSelectBox = css({
  "--rmscMain": "#4285f4",
  "--rmscHover": "#f1f3f5",
  "--rmscSelected": "#e2e6ea",
  "--rmscBorder": "#ccc",
  "--rmscGray": "#aaa",
  "--rmscBg": "#fff",
  "--rmscP": "10px",
  "--rmscRadius": "4px",
  "--rmscH": "38px",

  "*": {
    boxSizing: "border-box",
    transition: "all 0.2s ease",
  },
  ".gray": {
    color: "var(--rmsc-gray)",
  },
});

const MultiSelect = ({
  focusSearchOnOpen = true,
  hasSelectAll = true,
  shouldToggleOnHover,
  className = "multi-select",
  options,
  value,
  valueRenderer,
  overrideStrings,
  onChange,
  disabled,
  ItemRenderer,
  ArrowRenderer,
  selectAllLabel,
  isLoading,
  disableSearch,
  filterOptions,
  labelledBy,
  onMenuToggle,
  ClearIcon,
  debounceDuration = 300,
  ClearSelectedIcon,
  defaultIsOpen,
  isOpen,
  ListRenderer,
  onSelectAll,
  onOpen,
  onClose,
  HeaderRenderer = DropdownHeader,
  onSearchChange,
  onClearAll,
  disabledClass,
  applyDisableToItems,
  SelectAllRenderer,
}: ISelectProps) => {
  const nvalue = value || [];
  return (
    <div className={`${MultiSelectBox} ${className}`}>
      <Dropdown
        isLoading={isLoading}
        contentComponent={SelectPanel}
        shouldToggleOnHover={shouldToggleOnHover}
        contentProps={{
          ItemRenderer,
          options,
          value: nvalue,
          hasSelectAll,
          selectAllLabel,
          onChange,
          disabled,
          disableSearch,
          focusSearchOnOpen,
          filterOptions,
          overrideStrings,
          ClearIcon,
          debounceDuration,
          ListRenderer,
          onSelectAll,
          onSearchChange,
          SelectAllRenderer,
        }}
        disabled={disabled}
        labelledBy={labelledBy}
        onMenuToggle={onMenuToggle}
        ArrowRenderer={ArrowRenderer}
        ClearSelectedIcon={ClearSelectedIcon}
        defaultIsOpen={defaultIsOpen}
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        onClearAll={onClearAll}
        disabledClass={disabledClass}
        applyDisableToItems={applyDisableToItems}
      >
        <HeaderRenderer
          value={nvalue}
          options={options}
          valueRenderer={valueRenderer}
          overrideStrings={overrideStrings}
        />
      </Dropdown>
    </div>
  );
};

export default MultiSelect;
