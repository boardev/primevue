export default {
    variables: {
        colorScheme: {
            root: {
                background: '{surface.0}'
            },
            light: {
                item: {
                    textColor: '{surface.500}',
                    textColorHover: '{surface.700}',
                    iconColor: '{surface.400}'
                },
                separator: {
                    color: '{surface.400}'
                }
            },
            dark: {
                root: {
                    background: '{surface.900}'
                },
                item: {
                    textColor: '{surface.400}',
                    textColorHover: '{surface.0}',
                    iconColor: '{surface.500}'
                },
                separator: {
                    color: '{surface.500}'
                }
            }
        }
    },
    css: `
.p-breadcrumb {
    background: var(-p-breadcrumb-background);
    border: 0 none;
    border-radius: 6px;
    padding: 1rem;
    overflow-x: auto;
}

.p-breadcrumb .p-breadcrumb-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
}

.p-breadcrumb .p-menuitem-link {
    text-decoration: none;
    display: flex;
    align-items: center;
}

.p-breadcrumb .p-menuitem-separator {
    display: flex;
    align-items: center;
}

.p-breadcrumb::-webkit-scrollbar {
    display: none;
}

.p-breadcrumb .p-menuitem-link {
    transition: background-color var(--p-transition-duration), color var(--p-transition-duration), outline-color var(--p-transition-duration);
    border-radius: var(--p-rounded-base);
    outline-color: transparent;
}

.p-breadcrumb .p-menuitem-link:focus-visible {
    outline: var(--p-focus-ring-width) var(--p-focus-ring-style) var(--p-focus-ring-color);
    outline-offset: var(--p-focus-ring-offset);
}

.p-breadcrumb .p-menuitem-text {
    color: var(--p-breadcrumb-item-text-color);
    transition: background-color var(--p-transition-duration), color var(--p-transition-duration), outline-color var(--p-transition-duration);
    line-height: 1;
}

.p-breadcrumb .p-menuitem-text:hover {
    color: var(--p-breadcrumb-item-text-color-hover);
    line-height: 1;
}

.p-breadcrumb .p-menuitem-icon {
    color: var(--p-breadcrumb-item-icon-color);
}

.p-breadcrumb .p-breadcrumb-list li.p-menuitem-separator {
    margin: 0 0.5rem 0 0.5rem;
    color: var(--p-breadcrumb-separator-color);
}   
`
};
