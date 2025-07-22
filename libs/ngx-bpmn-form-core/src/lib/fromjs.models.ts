export interface FormJS {
  /**
   * List of form fields.
   */
  components: FormJSComponent[];
  /**
   * The target execution platform of a form
   */
  executionPlatform?: string;
  /**
   * The target execution platform version of a form
   */
  executionPlatformVersion?: string;
  /**
   * The exporter tool of a form
   */
  exporter?: Exporter;
  /**
   * The id of a form.
   */
  id?: string;
  /**
   * The schema version of a form
   */
  schemaVersion?: number;
  /**
   * The type of a form.
   */
  type: FormJSType;
  /**
   * The version tag of a form
   */
  versionTag?: string;

  [property: string]: any;
}

export interface FormJSComponent {
  /**
   * Define the accepted file types.
   */
  accept?: string;
  /**
   * A button can either trigger a submit or a reset action. Defaults to submit.
   */
  action?: Action;
  /**
   * Allow adding and removing items from a list.
   */
  allowAddRemove?: boolean;
  /**
   * Provides an alternative text to the image in case it cannot be displayed.
   */
  alt?: string;
  /**
   * Changes the visual appearance of the form field.
   */
  appearance?: Appearance;
  /**
   * Columns of a table component
   */
  columns?: Column[];
  /**
   * Table columns can be configured with a FEEL expression defining the individual columns
   * the table will render.
   */
  columnsExpression?: string;
  /**
   * List of form field children.
   */
  components?: ComponentComponent[];
  /**
   * Information of a form field related to conditional rendering.
   */
  conditional?: Conditional;
  /**
   * The content of a custom component.
   */
  content?: string;
  /**
   * Specifies the data source which will populate the table or the document preview
   * components.
   */
  dataSource?: string;
  /**
   * Label displayed beside the date input field.
   */
  dateLabel?: string;
  /**
   * Defines the maximum number of digits after the decimal..
   */
  decimalDigits?: number;
  /**
   * Default number of repetitions a dynamic list will render with, if no data is provided.
   * Defaults to 1.
   */
  defaultRepetitions?: number;
  /**
   * Provides a default value for the form field in case no input data exists for the given
   * key.
   */
  defaultValue?: any[] | boolean | number | string;
  /**
   * Description provided below the form field.
   */
  description?: string;
  /**
   * Disable the ability of a list can be collapsed.
   */
  disableCollapse?: boolean;
  /**
   * Disables the form field.
   */
  disabled?: boolean | string;
  /**
   * Enables the restriction to not allow past dates.
   */
  disallowPassedDates?: boolean;
  /**
   * The height of a form component.
   */
  height?: number;
  /**
   * The id of a form field.
   */
  id?: string;
  /**
   * Defines the increment between valid field value.
   */
  increment?: number | string;
  /**
   * Defines whether the list should currently be repeating its children.
   */
  isRepeating?: boolean;
  /**
   * Binds the form field to a form variable. Can be a dot separated path.
   */
  key?: string;
  /**
   * Label displayed on top of the form field.
   */
  label?: string;
  /**
   * Layout related information of a form field.
   */
  layout?: Layout;
  /**
   * The maximum height of a document item in the document preview component.
   */
  maxHeight?: number;
  /**
   * Allow multiple files to be selected.
   */
  multiple?: boolean | string;
  /**
   * Number of items that will be rendered when a list is collapsed. Defaults to 5.
   */
  nonCollapsedItems?: number;
  /**
   * Assigns a path that maps form field children into a data object. Can be a dot separated
   * path.
   */
  path?: string;
  /**
   * Custom properties of a form field.
   */
  properties?: { [key: string]: any };
  /**
   * Makes the form field read only.
   */
  readonly?: boolean | string;
  /**
   * Define the amount of rows a table will render.
   */
  rowCount?: number;
  /**
   * Allows the select entries to be searched via keyboard.
   */
  searchable?: boolean;
  /**
   * Security related information of a form field.
   */
  security?: Security;
  /**
   * Configures the output format of the value. This enables unlimited precision digits.
   */
  serializeToString?: boolean;
  /**
   * Outlines groups and dynamic lists.
   */
  showOutline?: boolean;
  /**
   * Specifies the image source via expression or static value (hyperlink or data URI).
   */
  source?: string;
  /**
   * Selects the type of the datetime component. This can either be date, time, or datetime.
   * Defaults to date.
   */
  subtype?: Subtype;
  /**
   * Text content of a text view. Either an expression, plain text, or templating syntax.
   */
  text?: string;
  /**
   * Defines the steps of time that can be selected in the time input field.
   */
  timeInterval?: number;
  /**
   * Label displayed beside the time input field.
   */
  timeLabel?: string;
  /**
   * Defines the time data format. This can either be utc_offset, utc_normalized, or
   * no_timezone.
   */
  timeSerializingFormat?: TimeSerializingFormat;
  /**
   * The type of a form field.
   */
  type: ComponentType;
  /**
   * Enter a URL to an external source.
   */
  url?: string;
  /**
   * Enables 24-hour time format.
   */
  use24h?: boolean;
  /**
   * Given that one of the following properties is set, the form will only submit when the
   * respective condition is fulfilled. Otherwise, a validation error will be displayed.
   */
  validate?: Validate;
  /**
   * Static options of a form field
   */
  values?: Value[];
  /**
   * Form fields can be configured with a FEEL expression defining the individual choices the
   * select provides.
   */
  valuesExpression?: string;
  /**
   * Form fields can be configured with an options source defining the individual choices the
   * select provides.
   */
  valuesKey?: string;
  /**
   * Sets the alignment of the form field children. This can either be start, center, or end.
   * Defaults to start.
   */
  verticalAlignment?: VerticalAlignment;

  [property: string]: any;
}

/**
 * A button can either trigger a submit or a reset action. Defaults to submit.
 */
export enum Action {
  Reset = 'reset',
  Submit = 'submit',
}

/**
 * Changes the visual appearance of the form field.
 */
export interface Appearance {
  /**
   * Adds an appendage before the input.
   */
  prefixAdorner?: string;
  /**
   * Adds an appendage after the input.
   */
  suffixAdorner?: string;

  [property: string]: any;
}

export interface Column {
  /**
   * Key of the column
   */
  key?: string;
  /**
   * Label of the column
   */
  label?: string;

  [property: string]: any;
}

export interface ComponentComponent {
  /**
   * Define the accepted file types.
   */
  accept?: string;
  /**
   * A button can either trigger a submit or a reset action. Defaults to submit.
   */
  action?: Action;
  /**
   * Allow adding and removing items from a list.
   */
  allowAddRemove?: boolean;
  /**
   * Provides an alternative text to the image in case it cannot be displayed.
   */
  alt?: string;
  /**
   * Changes the visual appearance of the form field.
   */
  appearance?: Appearance;
  /**
   * Columns of a table component
   */
  columns?: Column[];
  /**
   * Table columns can be configured with a FEEL expression defining the individual columns
   * the table will render.
   */
  columnsExpression?: string;
  /**
   * List of form field children.
   */
  components?: ComponentComponent[];
  /**
   * Information of a form field related to conditional rendering.
   */
  conditional?: Conditional;
  /**
   * The content of a custom component.
   */
  content?: string;
  /**
   * Specifies the data source which will populate the table or the document preview
   * components.
   */
  dataSource?: string;
  /**
   * Label displayed beside the date input field.
   */
  dateLabel?: string;
  /**
   * Defines the maximum number of digits after the decimal..
   */
  decimalDigits?: number;
  /**
   * Default number of repetitions a dynamic list will render with, if no data is provided.
   * Defaults to 1.
   */
  defaultRepetitions?: number;
  /**
   * Provides a default value for the form field in case no input data exists for the given
   * key.
   */
  defaultValue?: any[] | boolean | number | string;
  /**
   * Description provided below the form field.
   */
  description?: string;
  /**
   * Disable the ability of a list can be collapsed.
   */
  disableCollapse?: boolean;
  /**
   * Disables the form field.
   */
  disabled?: boolean | string;
  /**
   * Enables the restriction to not allow past dates.
   */
  disallowPassedDates?: boolean;
  /**
   * The height of a form component.
   */
  height?: number;
  /**
   * The id of a form field.
   */
  id?: string;
  /**
   * Defines the increment between valid field value.
   */
  increment?: number | string;
  /**
   * Defines whether the list should currently be repeating its children.
   */
  isRepeating?: boolean;
  /**
   * Binds the form field to a form variable. Can be a dot separated path.
   */
  key?: string;
  /**
   * Label displayed on top of the form field.
   */
  label?: string;
  /**
   * Layout related information of a form field.
   */
  layout?: Layout;
  /**
   * The maximum height of a document item in the document preview component.
   */
  maxHeight?: number;
  /**
   * Allow multiple files to be selected.
   */
  multiple?: boolean | string;
  /**
   * Number of items that will be rendered when a list is collapsed. Defaults to 5.
   */
  nonCollapsedItems?: number;
  /**
   * Assigns a path that maps form field children into a data object. Can be a dot separated
   * path.
   */
  path?: string;
  /**
   * Custom properties of a form field.
   */
  properties?: { [key: string]: any };
  /**
   * Makes the form field read only.
   */
  readonly?: boolean | string;
  /**
   * Define the amount of rows a table will render.
   */
  rowCount?: number;
  /**
   * Allows the select entries to be searched via keyboard.
   */
  searchable?: boolean;
  /**
   * Security related information of a form field.
   */
  security?: Security;
  /**
   * Configures the output format of the value. This enables unlimited precision digits.
   */
  serializeToString?: boolean;
  /**
   * Outlines groups and dynamic lists.
   */
  showOutline?: boolean;
  /**
   * Specifies the image source via expression or static value (hyperlink or data URI).
   */
  source?: string;
  /**
   * Selects the type of the datetime component. This can either be date, time, or datetime.
   * Defaults to date.
   */
  subtype?: Subtype;
  /**
   * Text content of a text view. Either an expression, plain text, or templating syntax.
   */
  text?: string;
  /**
   * Defines the steps of time that can be selected in the time input field.
   */
  timeInterval?: number;
  /**
   * Label displayed beside the time input field.
   */
  timeLabel?: string;
  /**
   * Defines the time data format. This can either be utc_offset, utc_normalized, or
   * no_timezone.
   */
  timeSerializingFormat?: TimeSerializingFormat;
  /**
   * The type of a form field.
   */
  type: ComponentType;
  /**
   * Enter a URL to an external source.
   */
  url?: string;
  /**
   * Enables 24-hour time format.
   */
  use24h?: boolean;
  /**
   * Given that one of the following properties is set, the form will only submit when the
   * respective condition is fulfilled. Otherwise, a validation error will be displayed.
   */
  validate?: Validate;
  /**
   * Static options of a form field
   */
  values?: Value[];
  /**
   * Form fields can be configured with a FEEL expression defining the individual choices the
   * select provides.
   */
  valuesExpression?: string;
  /**
   * Form fields can be configured with an options source defining the individual choices the
   * select provides.
   */
  valuesKey?: string;
  /**
   * Sets the alignment of the form field children. This can either be start, center, or end.
   * Defaults to start.
   */
  verticalAlignment?: VerticalAlignment;

  [property: string]: any;
}

/**
 * Information of a form field related to conditional rendering.
 */
export interface Conditional {
  /**
   * Expression to hide the form field.
   */
  hide?: boolean | string;

  [property: string]: any;
}

/**
 * Layout related information of a form field.
 */
export interface Layout {
  /**
   * Space the field will use inside its row. No value means it will automatically adjust to
   * available space in the row.
   */
  columns?: number | null;
  /**
   * Row in which a form field is placed.
   */
  row?: null | string;

  [property: string]: any;
}

/**
 * Security related information of a form field.
 */
export interface Security {
  /**
   * Allows form submission.
   */
  allowForms?: boolean;
  /**
   * Allows to open modal windows.
   */
  allowModals?: boolean;
  /**
   * Allows to open popups.
   */
  allowPopups?: boolean;
  /**
   * Allows the iframe content to be treated as being from the same origin.
   */
  allowSameOrigin?: boolean;
  /**
   * Allows the iframe content to navigate its top-level browsing context.
   */
  allowTopNavigation?: boolean;
  /**
   * Specifies the permissions policy set for the camera directive.
   */
  camera?: boolean;
  /**
   * Specifies the permissions policy set for the fullscreen directive.
   */
  fullscreen?: boolean;
  /**
   * Specifies the permissions policy set for the geolocation directive.
   */
  geolocation?: boolean;
  /**
   * Specifies the permissions policy set for the microphone directive.
   */
  microphone?: boolean;

  [property: string]: any;
}

/**
 * Selects the type of the datetime component. This can either be date, time, or datetime.
 * Defaults to date.
 */
export enum Subtype {
  Date = 'date',
  Datetime = 'datetime',
  Time = 'time',
}

/**
 * Defines the time data format. This can either be utc_offset, utc_normalized, or
 * no_timezone.
 */
export enum TimeSerializingFormat {
  NoTimezone = 'no_timezone',
  UTCNormalized = 'utc_normalized',
  UTCOffset = 'utc_offset',
}

/**
 * The type of a form field.
 */
export enum ComponentType {
  Button = 'button',
  Checkbox = 'checkbox',
  Checklist = 'checklist',
  Datetime = 'datetime',
  DocumentPreview = 'documentPreview',
  Dynamiclist = 'dynamiclist',
  Expression = 'expression',
  Filepicker = 'filepicker',
  Group = 'group',
  HTML = 'html',
  Iframe = 'iframe',
  Image = 'image',
  Number = 'number',
  Radio = 'radio',
  Select = 'select',
  Separator = 'separator',
  Spacer = 'spacer',
  Table = 'table',
  Taglist = 'taglist',
  Text = 'text',
  Textarea = 'textarea',
  Textfield = 'textfield',
}

/**
 * Given that one of the following properties is set, the form will only submit when the
 * respective condition is fulfilled. Otherwise, a validation error will be displayed.
 */
export interface Validate {
  /**
   * Form field value must be at most the provided number.
   */
  max?: number;
  /**
   * Form field value must be at most the provided length.
   */
  maxLength?: number;
  /**
   * Form field value must be at least the provided number.
   */
  min?: number;
  /**
   * Form field value must be at least the provided length.
   */
  minLength?: number;
  /**
   * Form field value must match the provided RegEx pattern.
   */
  pattern?: string;
  /**
   * Form field must contain a value.
   */
  required?: boolean;
  /**
   * Use predefined validation patterns. Available options are: Email, Phone, and Custom
   * (empty).
   */
  validationType?: ValidationType;

  [property: string]: any;
}

/**
 * Use predefined validation patterns. Available options are: Email, Phone, and Custom
 * (empty).
 */
export enum ValidationType {
  Custom = 'custom',
  Email = 'email',
  Empty = '',
  Phone = 'phone',
}

export interface Value {
  /**
   * Label of the option
   */
  label?: string;
  /**
   * Value of the option
   */
  value?: string;

  [property: string]: any;
}

/**
 * Sets the alignment of the form field children. This can either be start, center, or end.
 * Defaults to start.
 */
export enum VerticalAlignment {
  Center = 'center',
  End = 'end',
  Start = 'start',
}

/**
 * The exporter tool of a form
 */
export interface Exporter {
  /**
   * The name of the exporter tool
   */
  name?: string;
  /**
   * The version of the exporter tool
   */
  version?: string;

  [property: string]: any;
}

export enum FormJSType {
  Default = 'default',
}
