# COLORS
GREEN  := $(shell tput -Txterm setaf 2)
WHITE  := $(shell tput -Txterm setaf 7)
YELLOW := $(shell tput -Txterm setaf 3)
RESET  := $(shell tput -Txterm sgr0)

.PHONY: install
install: ##@install Install all dependencies for both projects and setup pre-commit.
	@cd backend && \
		$(MAKE) install && \
		poetry run pre-commit install --install-hooks -t commit-msg  -t pre-commit

.PHONY: install-dev
install-dev: ##@install Install only dev dependencies for both projects and setup pre-commit.
	@cd backend && \
		$(MAKE) install-dev && \
		poetry run pre-commit install --install-hooks -t commit-msg  -t pre-commit

.PHONY: pre-commit
pre-commit:
	@ cd backend && poetry run pre-commit run --all-files
