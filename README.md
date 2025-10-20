# Anonch Landing Skeleton

Этот репозиторий содержит каркас сервисa с точкой входа `main.go` и набором внутренних модулей для дальнейшей реализации.

## Требования окружения
- Go 1.24.5
- PostgreSQL 17.5

## Структура модулей
- `auth` — механизмы аутентификации и управления доступом.
- `auth/alor` — интеграция с API Alor и работа с торговым токеном.
- `market_prelaunch_selection` — логика отбора инструментов перед запуском торгов.
- `order` — подготовка и обработка торговых поручений.

### Подмодули `a_submodule`
- `a_submodule/session` — управление торговыми и аналитическими сессиями.
- `a_submodule/vah_gt_vwap_gt_val` — анализ соотношения уровней VAH, VWAP и VAL.
- `a_submodule/variable` — общие переменные и утилиты для расчётов VWAP/VA.
- `a_submodule/variable/VWAP_VA_5` — расчёты VWAP/VA на пятиминутном интервале.
- `a_submodule/variable/VWAP_VA_today` — показатели VWAP/VA за текущую торговую сессию.
- `a_submodule/variable/VWAP_VA_res` — агрегация и выдача итоговых значений VWAP/VA.
