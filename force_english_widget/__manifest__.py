# -*- coding: utf-8 -*-
{
    "name": "Force English Widget",
    "version": "1.0.0",
    "summary": "Automatically convert Arabic keyboard input to English characters",
    "description": """
This module provides a custom Odoo widget that automatically converts Arabic
keyboard input into English characters.

It is especially useful for users who frequently type English text while their
keyboard layout is set to Arabic, such as when entering policy numbers,
container numbers, or reference codes.

The widget works seamlessly across Odoo forms, wizards, and editable lists,
without requiring users to manually switch their keyboard language.
    """,
    "category": "Technical",
    "author": "Ahmed Al-Mokahfi",
    "license": "LGPL-3",
    "depends": ["web"],
    "assets": {
        "web.assets_backend": [
            "force_english_widget/static/src/js/field_force_english.js",
            "force_english_widget/static/src/xml/field_force_english.xml"
        ]
    },
    "installable": True,
    "application": False,
}
