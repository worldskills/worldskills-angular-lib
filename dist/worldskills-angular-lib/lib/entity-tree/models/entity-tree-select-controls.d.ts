import { TemplateRef } from '@angular/core';
export interface EntityTreeSelectControls {
    wrapper?: TemplateRef<{
        $implicit: TemplateRef<void>;
    }>;
    expand?: TemplateRef<{
        enabled: boolean;
        click: () => void;
    }>;
    expandAll?: TemplateRef<{
        click: () => void;
    }>;
    collapse?: TemplateRef<{
        enabled: boolean;
        click: () => void;
    }>;
    collapseAll?: TemplateRef<{
        click: () => void;
    }>;
    separator?: TemplateRef<void>;
    showing?: TemplateRef<{
        showing: number;
        total: number;
    }>;
}
